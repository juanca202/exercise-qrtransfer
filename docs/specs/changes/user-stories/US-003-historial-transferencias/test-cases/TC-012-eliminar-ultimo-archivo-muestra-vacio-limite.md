---
id: TC-012
type: test-case
status: Ready
test_type: [E2E]
created: 2026-10-08
perspective: Boundary
priority: Low
criterion: AC-004
parent: US-003
created_by: juanca202
---
# TC-012 — Dado un historial con una sola entrada, Cuando se elimina y se confirma, Entonces el historial queda vacío y se muestra el estado vacío

## Precondiciones

- App servida en desarrollo local (`ng serve` o build local) y abierta en Chrome; sin cuentas ni servidor (entorno de referencia: desarrollo).
- Historial con una única entrada.

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| Archivo | «notas.txt» [propuesto], 2 KB | Única entrada |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Usuario | Eliminar «notas.txt» y confirmar | La fila desaparece |
| 2 | Usuario | Revisar la pantalla | Se muestra «Aún no hay transferencias» |

## Resultado esperado final

El historial queda vacío con su mensaje y el espacio liberado.

## Observaciones

Entorno de referencia: desarrollo local, Chrome (confirmado por el usuario).
