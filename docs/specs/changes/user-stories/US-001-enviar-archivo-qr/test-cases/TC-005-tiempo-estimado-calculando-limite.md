---
id: TC-005
type: test-case
status: Ready
test_type: [E2E]
created: 2026-10-08
perspective: Boundary
priority: Low
criterion: AC-003
parent: US-001
created_by: juanca202
---
# TC-005 — Dado un archivo recién elegido sin datos suficientes para estimar, Cuando la pantalla de emisión aparece por primera vez, Entonces el tiempo estimado se muestra como «calculando…»

## Precondiciones

- App servida en desarrollo local (`ng serve` o build local) y abierta en Chrome; sin cuentas ni servidor (entorno de referencia: desarrollo).

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| Archivo | prueba-1MB.bin [propuesto] | Binario determinista de 1 MB (1 048 576 B) |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Usuario | Elegir prueba-1MB.bin | Se muestra la pantalla de emisión |
| 2 | Usuario | Observar el tiempo estimado justo al aparecer | Muestra «calculando…» hasta tener datos |

## Resultado esperado final

Mientras no hay datos suficientes el tiempo estimado se muestra como «calculando…».

## Observaciones

Entorno de referencia: desarrollo local (supuesto confirmado por el usuario).
