---
id: TC-038
type: test-case
status: Ready
test_type: [Integration]
created: 2026-10-08
perspective: Happy Path
priority: Low
criterion: AC-025
parent: US-002
created_by: juanca202
---
# TC-038 — Dado una recepción completada, Cuando se guarda el archivo, Entonces se solicita almacenamiento persistente

## Precondiciones

- App servida en desarrollo local (`ng serve` o build local) y abierta en Chrome; sin cuentas ni servidor (entorno de referencia: desarrollo).

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| Archivo | prueba-100KB.bin [propuesto] | Binario determinista de 100 KB (102 400 B) |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Sistema | Completar una recepción | Se guarda el archivo |
| 2 | Sistema | Observar las llamadas a `navigator.storage.persist` | Se solicitó el almacenamiento persistente |

## Resultado esperado final

Se solicita almacenamiento persistente al guardar.

## Observaciones

Entorno de referencia: desarrollo local (supuesto confirmado por el usuario).
