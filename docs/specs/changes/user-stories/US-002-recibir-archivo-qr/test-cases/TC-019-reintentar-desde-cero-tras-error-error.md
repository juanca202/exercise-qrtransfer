---
id: TC-019
type: test-case
status: Ready
test_type: [Unit, E2E]
created: 2026-10-08
perspective: Error
priority: High
criterion: AC-011
parent: US-002
created_by: juanca202
---
# TC-019 — Dado un resultado «datos inválidos» o «no reconstruible», Cuando el usuario elige reintentar, Entonces la recepción empieza de cero y los parciales no persisten

## Precondiciones

- App servida en desarrollo local (`ng serve` o build local) y abierta en Chrome; sin cuentas ni servidor (entorno de referencia: desarrollo).

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| Archivo | prueba-100KB.bin [propuesto] | Binario determinista de 100 KB (102 400 B) |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Sistema | Provocar «datos inválidos» | Resultado de error |
| 2 | Usuario | Elegir «Reintentar» | El contador vuelve a 0 |
| 3 | Usuario | Recargar la app | No hay fragmentos persistidos |

## Resultado esperado final

Se reinicia desde cero y no queda nada persistido.

## Observaciones

Entorno de referencia: desarrollo local (supuesto confirmado por el usuario).
