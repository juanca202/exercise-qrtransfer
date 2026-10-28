---
id: TC-003
type: test-case
status: Ready
test_type: [E2E]
created: 2026-10-08
perspective: Error
priority: Medium
criterion: AC-002
parent: US-001
created_by: juanca202
---
# TC-003 — Dado el selector de archivos abierto desde «Enviar», Cuando el usuario intenta seleccionar dos archivos a la vez, Entonces el sistema no permite elegir más de uno

## Precondiciones

- App servida en desarrollo local (`ng serve` o build local) y abierta en Chrome; sin cuentas ni servidor (entorno de referencia: desarrollo).

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| N/A | N/A | Sin datos específicos |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Usuario | Pulsar «Enviar» | Se abre el selector |
| 2 | Usuario | Intentar seleccionar dos archivos | El selector solo admite una selección |

## Resultado esperado final

Solo se inicia (o se puede iniciar) la transferencia de un archivo; el control de selección no es múltiple.

## Observaciones

Entorno de referencia: desarrollo local (supuesto confirmado por el usuario). Verifica BR-01.
