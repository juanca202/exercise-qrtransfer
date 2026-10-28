---
id: TC-007
type: test-case
status: Ready
test_type: [E2E]
created: 2026-10-08
perspective: Boundary
priority: Low
criterion: AC-005
parent: US-002
created_by: juanca202
---
# TC-007 — Dado una recepción en curso en un viewport de 360 px, Cuando se muestra la pantalla, Entonces se ven al menos nombre, tamaño, tiempo y porcentaje

## Precondiciones

- App servida en desarrollo local (`ng serve` o build local) y abierta en Chrome; sin cuentas ni servidor (entorno de referencia: desarrollo).

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| Archivo | prueba-100KB.bin [propuesto] | Binario determinista de 100 KB (102 400 B) |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Sistema | Fijar el viewport a 360 px | Pantalla en formato móvil |
| 2 | Usuario | Iniciar y confirmar una recepción | Se ven al menos nombre, tamaño, tiempo y porcentaje |

## Resultado esperado final

En móvil la información mínima es visible.

## Observaciones

Entorno de referencia: desarrollo local (supuesto confirmado por el usuario).
