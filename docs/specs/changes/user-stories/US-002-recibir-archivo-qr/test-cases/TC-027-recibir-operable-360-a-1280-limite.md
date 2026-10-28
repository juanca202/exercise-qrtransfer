---
id: TC-027
type: test-case
status: Ready
test_type: [E2E, Visual Test]
created: 2026-10-08
perspective: Boundary
priority: Medium
criterion: AC-017
parent: US-002
created_by: juanca202
---
# TC-027 — Dado las pantallas de recepción y resultado con sus errores, Cuando se muestran a 360 px y a 1280 px, Entonces no hay desplazamiento horizontal

## Precondiciones

- App servida en desarrollo local (`ng serve` o build local) y abierta en Chrome; sin cuentas ni servidor (entorno de referencia: desarrollo).

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| N/A | N/A | Sin datos específicos |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Sistema | Fijar 360 px y recorrer recepción, resultado y un error | Sin desplazamiento horizontal |
| 2 | Sistema | Repetir a 1280 px | Sin desplazamiento horizontal |

## Resultado esperado final

Las pantallas caben sin scroll horizontal de 360 a 1280 px.

## Observaciones

Entorno de referencia: desarrollo local (supuesto confirmado por el usuario).
