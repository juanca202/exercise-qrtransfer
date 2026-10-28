---
id: TC-017
type: test-case
status: Ready
test_type: [E2E]
created: 2026-10-08
perspective: Happy Path
priority: Medium
criterion: AC-010
parent: US-002
created_by: juanca202
---
# TC-017 — Dado una recepción completada de un archivo no imagen, Cuando se muestra el resultado, Entonces se ve un icono con el nombre y el clic lo descarga o muestra según el tipo

## Precondiciones

- App servida en desarrollo local (`ng serve` o build local) y abierta en Chrome; sin cuentas ni servidor (entorno de referencia: desarrollo).

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| Archivo | prueba-100KB.bin [propuesto] | Binario determinista de 100 KB (102 400 B) |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Sistema | Completar la recepción de datos.bin | Se muestra un icono con el nombre |
| 2 | Usuario | Hacer clic | Se descarga (tipo no visualizable) |

## Resultado esperado final

Un tipo no visualizable se muestra con icono y se descarga al hacer clic.

## Observaciones

Entorno de referencia: desarrollo local (supuesto confirmado por el usuario).
