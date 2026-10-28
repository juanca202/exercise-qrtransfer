---
id: TC-009
type: test-case
status: Ready
test_type: [Unit, E2E]
created: 2026-10-08
perspective: Happy Path
priority: High
criterion: AC-007
parent: US-002
created_by: juanca202
---
# TC-009 — Dado todos los fragmentos válidos recibidos, Cuando la verificación de integridad es satisfactoria, Entonces el resultado es «completada»

## Precondiciones

- App servida en desarrollo local (`ng serve` o build local) y abierta en Chrome; sin cuentas ni servidor (entorno de referencia: desarrollo).

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| Archivo | prueba-100KB.bin [propuesto] | Binario determinista de 100 KB (102 400 B) |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Sistema | Entregar todos los fragmentos válidos | Verificación satisfactoria |
| 2 | Usuario | Ver el resultado | Se muestra «completada» |

## Resultado esperado final

Se informa «completada».

## Observaciones

Entorno de referencia: desarrollo local (supuesto confirmado por el usuario).
