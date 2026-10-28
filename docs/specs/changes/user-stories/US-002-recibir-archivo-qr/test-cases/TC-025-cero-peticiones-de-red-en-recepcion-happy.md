---
id: TC-025
type: test-case
status: Ready
test_type: [E2E]
created: 2026-10-08
perspective: Happy Path
priority: High
criterion: AC-015
parent: US-002
created_by: juanca202
---
# TC-025 — Dado la app cargada y una captura de tráfico activa, Cuando se recibe un archivo completo, Entonces no hay ninguna petición de red

## Precondiciones

- App servida en desarrollo local (`ng serve` o build local) y abierta en Chrome; sin cuentas ni servidor (entorno de referencia: desarrollo).

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| Archivo | prueba-100KB.bin [propuesto] | Binario determinista de 100 KB (102 400 B) |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Sistema | Activar captura de peticiones tras la carga | Captura activa |
| 2 | Usuario | Completar una recepción | Recepción completada |
| 3 | Sistema | Revisar las peticiones | Ninguna, ni telemetría |

## Resultado esperado final

Cero peticiones de red durante la recepción.

## Observaciones

Entorno de referencia: desarrollo local (supuesto confirmado por el usuario).
