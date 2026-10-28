---
id: TC-006
type: test-case
status: Ready
test_type: [E2E]
created: 2026-10-08
perspective: Happy Path
priority: Medium
criterion: AC-005
parent: US-002
created_by: juanca202
---
# TC-006 — Dado una recepción en curso confirmada, Cuando avanza la lectura, Entonces se muestran nombre, tamaño, tiempo restante, fragmentos recibidos del total y barra con porcentaje

## Precondiciones

- App servida en desarrollo local (`ng serve` o build local) y abierta en Chrome; sin cuentas ni servidor (entorno de referencia: desarrollo). Bucle local o cámara simulada.

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| Archivo | prueba-100KB.bin [propuesto] | Binario determinista de 100 KB (102 400 B) |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Usuario | Iniciar la recepción y confirmar la transferencia | Comienza el progreso |
| 2 | Usuario | Observar la pantalla | Se ven nombre, tamaño total, tiempo restante, recibidos/total y barra con % |

## Resultado esperado final

La pantalla de recepción informa del progreso completo.

## Observaciones

Entorno de referencia: desarrollo local (supuesto confirmado por el usuario).
