---
id: TC-011
type: test-case
status: Ready
test_type: [E2E]
created: 2026-10-08
perspective: Error
priority: Medium
criterion: AC-004
parent: US-003
created_by: juanca202
---
# TC-011 — Dado un archivo del historial, Cuando se pulsa Eliminar y se rechaza la confirmación, Entonces el archivo permanece sin cambios

## Precondiciones

- App servida en desarrollo local (`ng serve` o build local) y abierta en Chrome; sin cuentas ni servidor (entorno de referencia: desarrollo).
- Historial sembrado.

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| Historial | Historial sembrado [propuesto]: recibido «foto.png» (20 KB, hace 3 días), enviado «informe.pdf» (150 KB, hace 2 días), recibido «notas.txt» (2 KB, hace 1 día), enviado «datos.bin» (100 KB, hace 1 hora) | — |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Usuario | Pulsar Eliminar en «notas.txt» | Se pide confirmación |
| 2 | Usuario | Cancelar | La confirmación se cierra |
| 3 | Usuario | Revisar el historial | «notas.txt» sigue presente y exportable |

## Resultado esperado final

No se elimina nada; el espacio usado no cambia.

## Observaciones

Entorno de referencia: desarrollo local, Chrome (confirmado por el usuario).
