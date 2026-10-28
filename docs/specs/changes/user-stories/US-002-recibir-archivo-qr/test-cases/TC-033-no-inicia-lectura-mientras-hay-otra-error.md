---
id: TC-033
type: test-case
status: Ready
test_type: [Unit, E2E]
created: 2026-10-08
perspective: Error
priority: Medium
criterion: AC-021
parent: US-002
created_by: juanca202
---
# TC-033 — Dado una lectura en curso, Cuando el usuario pulsa varias veces el botón de recibir, Entonces no se inicia una lectura nueva mientras la otra sigue

## Precondiciones

- App servida en desarrollo local (`ng serve` o build local) y abierta en Chrome; sin cuentas ni servidor (entorno de referencia: desarrollo).

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| N/A | N/A | Sin datos específicos |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Usuario | Pulsar «Recibir» | Se inicia la lectura |
| 2 | Usuario | Pulsar de nuevo varias veces seguidas | No se abre otra lectura; el estado sigue siendo una sola |

## Resultado esperado final

Solo hay una lectura activa a la vez.

## Observaciones

Entorno de referencia: desarrollo local (supuesto confirmado por el usuario).
