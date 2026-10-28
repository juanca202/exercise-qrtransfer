---
id: TC-004
type: test-case
status: Ready
test_type: [Unit]
created: 2026-10-08
perspective: Happy Path
priority: High
criterion: AC-003
parent: US-002
created_by: juanca202
---
# TC-004 — Dado todos los fragmentos de un archivo, Cuando se entregan en orden aleatorio, Entonces el archivo se reconstruye idéntico

## Precondiciones

- Receptor ejecutable sin cámara.

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| Archivo | prueba-100KB.bin [propuesto] | Binario determinista de 100 KB (102 400 B) |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Sistema | Barajar los fragmentos de prueba-100KB.bin | Orden aleatorio |
| 2 | Sistema | Entregarlos al receptor | Se reordenan por posición y se reconstruye |

## Resultado esperado final

El archivo resultante es idéntico al original.

## Observaciones

Entorno de referencia: desarrollo local (supuesto confirmado por el usuario).
