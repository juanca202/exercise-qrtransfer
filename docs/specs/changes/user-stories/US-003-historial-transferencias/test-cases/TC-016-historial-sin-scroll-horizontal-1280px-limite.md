---
id: TC-016
type: test-case
status: Ready
test_type: [E2E, Visual Test]
created: 2026-10-08
perspective: Boundary
priority: Medium
criterion: AC-006
parent: US-003
created_by: juanca202
---
# TC-016 — Dado un ancho de 1280 px o más, Cuando se abre la pantalla de inicio con historial, Entonces no hay desplazamiento horizontal

## Precondiciones

- App servida en desarrollo local (`ng serve` o build local) y abierta en Chrome; sin cuentas ni servidor (entorno de referencia: desarrollo).
- Historial sembrado.

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| Viewport | 1280 × 800 px y 1920 × 1080 px | Ancho de escritorio |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Usuario | Abrir la pantalla con cada viewport | Se ve el historial completo |
| 2 | Sistema | Comparar `scrollWidth` y `clientWidth` | scrollWidth ≤ clientWidth en ambos |

## Resultado esperado final

Sin desplazamiento horizontal a 1280 px o más.

## Observaciones

Entorno de referencia: desarrollo local, Chrome (confirmado por el usuario).
