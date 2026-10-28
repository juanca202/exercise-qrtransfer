---
id: TC-015
type: test-case
status: Ready
test_type: [E2E, Visual Test]
created: 2026-10-08
perspective: Boundary
priority: High
criterion: AC-006
parent: US-003
created_by: juanca202
---
# TC-015 — Dado un ancho de 360 px, Cuando se abre la pantalla de inicio con historial, Entonces no hay desplazamiento horizontal

## Precondiciones

- App servida en desarrollo local (`ng serve` o build local) y abierta en Chrome; sin cuentas ni servidor (entorno de referencia: desarrollo).
- Historial sembrado con un nombre de archivo largo.

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| Viewport | 360 × 740 px | Ancho mínimo |
| Archivo | Nombre de 60 caracteres [propuesto] | Verifica el desbordamiento |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Usuario | Abrir la pantalla con viewport de 360 px | Se ven botones, filtros y filas |
| 2 | Sistema | Comparar `scrollWidth` y `clientWidth` del documento | scrollWidth ≤ clientWidth; acciones Exportar y Eliminar accesibles |

## Resultado esperado final

Sin desplazamiento horizontal a 360 px.

## Observaciones

Entorno de referencia: desarrollo local, Chrome (confirmado por el usuario).
