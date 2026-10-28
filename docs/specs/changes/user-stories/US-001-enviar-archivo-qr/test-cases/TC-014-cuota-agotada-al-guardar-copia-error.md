---
id: TC-014
type: test-case
status: Ready
test_type: [Integration]
created: 2026-10-08
perspective: Error
priority: High
criterion: AC-011
parent: US-001
created_by: juanca202
---
# TC-014 — Dado un almacenamiento sin espacio suficiente, Cuando el usuario elige un archivo y la copia no cabe, Entonces se muestra un mensaje claro y no se inicia la transferencia

## Precondiciones

- App servida en desarrollo local (`ng serve` o build local) y abierta en Chrome; sin cuentas ni servidor (entorno de referencia: desarrollo).

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| Archivo | prueba-1MB.bin [propuesto] | Binario determinista de 1 MB (1 048 576 B) |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Sistema | Simular cuota de almacenamiento agotada | La cuota disponible es insuficiente |
| 2 | Usuario | Elegir prueba-1MB.bin | Se muestra un mensaje sobre falta de espacio; no se inicia |

## Resultado esperado final

Mensaje claro, sin QR y sin transferencia.

## Observaciones

Entorno de referencia: desarrollo local (supuesto confirmado por el usuario). La cuota se simula con un doble del almacenamiento.
