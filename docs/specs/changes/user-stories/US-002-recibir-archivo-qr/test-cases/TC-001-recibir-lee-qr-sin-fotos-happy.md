---
id: TC-001
type: test-case
status: Ready
test_type: [E2E]
created: 2026-10-08
perspective: Happy Path
priority: High
criterion: AC-001
parent: US-002
created_by: juanca202
---
# TC-001 — Dado la pantalla de inicio y una cámara disponible, Cuando el usuario pulsa «Recibir» y se muestra una secuencia de QR, Entonces la cámara se activa y los QR se leen automáticamente sin fotos manuales

## Precondiciones

- App servida en desarrollo local (`ng serve` o build local) y abierta en Chrome; sin cuentas ni servidor (entorno de referencia: desarrollo). Cámara simulada de Chrome (`--use-file-for-fake-video-capture`) o bucle local de la app.

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| N/A | N/A | Sin datos específicos |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Usuario | Pulsar «Recibir» | Se activa la cámara |
| 2 | Sistema | Presentar una secuencia de QR ante la cámara (cámara simulada) | Los fragmentos se leen solos, sin pulsar nada |

## Resultado esperado final

La lectura es continua y automática.

## Observaciones

Entorno de referencia: desarrollo local (supuesto confirmado por el usuario).
