---
id: TC-018
type: test-case
status: Ready
test_type: [Manual]
created: 2026-10-08
perspective: Happy Path
priority: Medium
criterion: AC-013
parent: US-001
created_by: juanca202
---
# TC-018 — Dado la app instalada en el móvil, Cuando se activa el modo avión y se envía un archivo, Entonces el envío funciona sin red

## Precondiciones

- Móvil Android con Chrome y túnel HTTPS a la app en desarrollo; segundo dispositivo o pantalla como emisor (guion `spike/GUIA-MEDICION.md` de la rama `spike/WI-002-medicion-qr-android`).

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| Archivo | prueba-100KB.bin [propuesto] | Binario determinista de 100 KB (102 400 B) |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Usuario | Instalar la app con red | La app aparece como instalada |
| 2 | Usuario | Activar modo avión y abrir la app instalada | La app abre |
| 3 | Usuario | Enviar prueba-100KB.bin | Comienza la emisión |

## Resultado esperado final

El envío funciona en modo avión.

## Observaciones

Entorno de referencia: desarrollo local (supuesto confirmado por el usuario). Registrar netRequests del Registro de la app de medición (debe ser 0).
