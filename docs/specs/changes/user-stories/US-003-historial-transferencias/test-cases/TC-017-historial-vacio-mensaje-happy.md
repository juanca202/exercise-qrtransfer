---
id: TC-017
type: test-case
status: Ready
test_type: [E2E]
created: 2026-10-08
perspective: Happy Path
priority: Medium
criterion: AC-007
parent: US-003
created_by: juanca202
---
# TC-017 — Dado un historial sin transferencias, Cuando se abre la pantalla de inicio, Entonces se muestra «Aún no hay transferencias» en lugar de la lista

## Precondiciones

- App servida en desarrollo local (`ng serve` o build local) y abierta en Chrome; sin cuentas ni servidor (entorno de referencia: desarrollo).
- Almacenamiento de la app vacío (sin entradas).

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| Historial | Vacío | — |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Usuario | Abrir la pantalla de inicio | Se ven los botones Enviar y Recibir |
| 2 | Usuario | Revisar el área del historial | Aparece «Aún no hay transferencias» y no hay tabla de filas |

## Resultado esperado final

El mensaje de estado vacío sustituye a la lista.

## Observaciones

Entorno de referencia: desarrollo local, Chrome (confirmado por el usuario).
