---
id: TC-024
type: test-case
status: Ready
test_type: [Unit, E2E]
created: 2026-10-08
perspective: Boundary
priority: Medium
criterion: AC-018
parent: US-001
created_by: juanca202
---
# TC-024 — Dado un archivo que requiere más fragmentos de los que admite el protocolo, Cuando el usuario lo elige para enviar, Entonces se informa con un mensaje claro y no se inicia la transferencia

## Precondiciones

- App servida en desarrollo local (`ng serve` o build local) y abierta en Chrome; sin cuentas ni servidor (entorno de referencia: desarrollo).

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| N/A | N/A | Sin datos específicos |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Sistema | Configurar un archivo cuyo fragmentado supere el máximo del protocolo (65 535) | El cálculo excede el límite |
| 2 | Usuario | Elegirlo para enviar | Mensaje claro; no hay emisión |

## Resultado esperado final

Mensaje claro y sin transferencia.

## Observaciones

Entorno de referencia: desarrollo local (supuesto confirmado por el usuario). Para evitar un archivo real de ~26 MB, simular el tamaño a nivel de la función que calcula los fragmentos.
