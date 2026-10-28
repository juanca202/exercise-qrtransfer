---
id: TC-013
type: test-case
status: Ready
test_type: [E2E]
created: 2026-10-08
perspective: Happy Path
priority: High
criterion: AC-008
parent: US-002
created_by: juanca202
---
# TC-013 — Dado una recepción en curso con fragmentos parciales, Cuando el usuario cancela, Entonces se detiene, se descartan los parciales y se libera la cámara sin confirmar

## Precondiciones

- App servida en desarrollo local (`ng serve` o build local) y abierta en Chrome; sin cuentas ni servidor (entorno de referencia: desarrollo). Bucle local o cámara simulada.

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| Archivo | prueba-100KB.bin [propuesto] | Binario determinista de 100 KB (102 400 B) |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Usuario | Iniciar la recepción y recibir algunos fragmentos | Hay parciales en memoria |
| 2 | Usuario | Pulsar cancelar | Se detiene sin diálogo de confirmación |
| 3 | Usuario | Volver a «Recibir» | No quedan fragmentos previos y la cámara se liberó |

## Resultado esperado final

Proceso detenido, parciales descartados y cámara liberada.

## Observaciones

Entorno de referencia: desarrollo local (supuesto confirmado por el usuario).
