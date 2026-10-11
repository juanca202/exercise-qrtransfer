const { spawn, spawnSync } = require('node:child_process');
const qrcode = require('qrcode');

const target = process.argv[2] ?? 'http://localhost:4200';
const tunnelUrlPattern = /https:\/\/[a-z0-9-]+\.trycloudflare\.com/i;
const ansiPattern = /\u001b\[[0-9;]*m/g;

const launch = resolveCloudflared(target);
const child = spawn(launch.command, launch.args, {
  detached: true,
  stdio: ['ignore', 'pipe', 'pipe'],
});

let buffer = '';
let tunnelUrl = null;
let printedAfterReady = false;
let stopping = false;

child.stdout.on('data', onOutput);
child.stderr.on('data', onOutput);

child.on('error', (error) => {
  console.error(`No se pudo iniciar cloudflared: ${error.message}`);
  process.exit(1);
});

child.on('exit', (code) => {
  process.exit(stopping ? 0 : (code ?? 1));
});

process.on('SIGINT', stop);
process.on('SIGTERM', stop);

function resolveCloudflared(origin) {
  const tunnelArgs = ['tunnel', '--url', origin];
  const local = spawnSync('which', ['cloudflared'], { encoding: 'utf8' });

  if (local.status === 0) {
    return { command: 'cloudflared', args: tunnelArgs };
  }

  return { command: 'npx', args: ['--yes', 'cloudflared', ...tunnelArgs] };
}

function onOutput(chunk) {
  const text = chunk.toString();
  process.stderr.write(text);

  if (!tunnelUrl) {
    buffer += text.replace(ansiPattern, '');
    const match = buffer.match(tunnelUrlPattern);

    if (match) {
      tunnelUrl = match[0];
      buffer = '';
      void printQr(tunnelUrl);
    } else if (buffer.length > 16000) {
      buffer = buffer.slice(-4000);
    }
  }

  if (tunnelUrl && !printedAfterReady && text.includes('Registered tunnel connection')) {
    printedAfterReady = true;
    void printQr(tunnelUrl);
  }
}

async function printQr(url) {
  const qr = await qrcode.toString(url, {
    type: 'terminal',
    small: true,
    errorCorrectionLevel: 'M',
  });

  console.log(`\nTúnel listo. Escanea este QR (la app debe estar en ${target}):\n`);
  console.log(qr);
  console.log(url);
  console.log('\nCtrl+C cierra el túnel.\n');
}

function stop() {
  if (stopping) {
    process.exit(1);
  }

  stopping = true;

  try {
    process.kill(-child.pid, 'SIGTERM');
  } catch {
    child.kill('SIGTERM');
  }
}
