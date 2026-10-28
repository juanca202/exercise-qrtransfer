---
id: TC-004
type: test-case
status: Ready
test_type: [E2E]
created: 2026-10-08
perspective: Happy Path
priority: High
criterion: AC-003
parent: US-001
created_by: juanca202
---
# TC-004 — Dado un archivo elegido, Cuando la pantalla de emisión se muestra, Entonces se ven la secuencia de QR y, debajo, nombre, tipo, tamaño, cantidad de QR y tiempo estimado por vuelta, sin progreso

## Precondiciones

- App servida en desarrollo local (`ng serve` o build local) y abierta en Chrome; sin cuentas ni servidor (entorno de referencia: desarrollo).

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| Archivo | prueba-100KB.bin [propuesto] | Binario determinista de 100 KB (102 400 B) |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Usuario | Elegir prueba-100KB.bin | Aparece la secuencia de QR |
| 2 | Usuario | Revisar la información bajo el QR | Se muestran nombre, tipo, tamaño, total de QR y tiempo por vuelta; no hay barra de progreso |

## Resultado esperado final

La pantalla muestra solo el QR y la información del archivo, sin progreso de transmisión.

## Observaciones

Entorno de referencia: desarrollo local (supuesto confirmado por el usuario).
