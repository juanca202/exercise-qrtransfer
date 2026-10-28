---
id: TC-020
type: test-case
status: Ready
test_type: [E2E]
created: 2026-10-08
perspective: Error
priority: High
criterion: AC-012
parent: US-002
created_by: juanca202
---
# TC-020 — Dado un dispositivo sin cámara o con el permiso denegado, Cuando el usuario pulsa «Recibir», Entonces se muestra un mensaje claro y no se inicia la recepción

## Precondiciones

- App servida en desarrollo local (`ng serve` o build local) y abierta en Chrome; sin cuentas ni servidor (entorno de referencia: desarrollo).

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| N/A | N/A | Sin datos específicos |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Sistema | Denegar el permiso de cámara | Permiso denegado |
| 2 | Usuario | Pulsar «Recibir» | Mensaje claro sobre la cámara; no se inicia |

## Resultado esperado final

Mensaje claro y sin recepción iniciada.

## Observaciones

Entorno de referencia: desarrollo local (supuesto confirmado por el usuario).
