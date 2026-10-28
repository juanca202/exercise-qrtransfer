---
id: TC-009
type: test-case
status: Ready
test_type: [E2E]
created: 2026-10-08
perspective: Happy Path
priority: High
criterion: AC-007
parent: US-001
created_by: juanca202
---
# TC-009 — Dado un archivo en emisión, Cuando pasan varios segundos, Entonces los QR cambian secuencialmente sin intervención del usuario

## Precondiciones

- App servida en desarrollo local (`ng serve` o build local) y abierta en Chrome; sin cuentas ni servidor (entorno de referencia: desarrollo).

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| Archivo | prueba-100KB.bin [propuesto] | Binario determinista de 100 KB (102 400 B) |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Usuario | Elegir prueba-100KB.bin | Comienza la emisión |
| 2 | Usuario | No interactuar durante 10 s | El QR cambia de forma continua a velocidad automática |

## Resultado esperado final

La secuencia avanza sola; el usuario no define la velocidad.

## Observaciones

Entorno de referencia: desarrollo local (supuesto confirmado por el usuario).
