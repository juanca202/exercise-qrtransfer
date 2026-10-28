---
id: TC-014
type: test-case
status: Ready
test_type: [Integration]
created: 2026-10-08
perspective: Happy Path
priority: High
criterion: AC-009
parent: US-002
created_by: juanca202
---
# TC-014 — Dado una recepción completada, Cuando se guarda el archivo, Entonces queda en el almacenamiento privado con nombre y tipo originales sin pedir permisos de carpeta

## Precondiciones

- App servida en desarrollo local (`ng serve` o build local) y abierta en Chrome; sin cuentas ni servidor (entorno de referencia: desarrollo).

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| Archivo | informe.pdf, application/pdf [propuesto] | 5 KB determinista |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Sistema | Completar la recepción de informe.pdf | Se guarda automáticamente |
| 2 | Sistema | Leer la entrada del almacenamiento | Nombre y tipo coinciden; no hubo pedido de permisos |

## Resultado esperado final

El archivo queda guardado con nombre y tipo originales.

## Observaciones

Entorno de referencia: desarrollo local (supuesto confirmado por el usuario).
