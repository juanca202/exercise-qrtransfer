---
id: TC-021
type: test-case
status: Ready
test_type: [E2E]
created: 2026-10-08
perspective: Error
priority: Medium
criterion: AC-012
parent: US-002
created_by: juanca202
---
# TC-021 — Dado un navegador sin las APIs necesarias, Cuando el usuario pulsa «Recibir», Entonces se muestra un mensaje claro y no se inicia la recepción

## Precondiciones

- App servida en desarrollo local (`ng serve` o build local) y abierta en Chrome; sin cuentas ni servidor (entorno de referencia: desarrollo).

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| N/A | N/A | Sin datos específicos |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Sistema | Abrir la app sin la API de cámara (simulada) | Incompatibilidad detectada |
| 2 | Usuario | Pulsar «Recibir» | Mensaje de navegador no compatible |

## Resultado esperado final

Mensaje claro y sin recepción.

## Observaciones

Entorno de referencia: desarrollo local (supuesto confirmado por el usuario). Se simula con un script de inicialización de Playwright.
