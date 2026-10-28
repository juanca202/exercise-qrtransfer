---
id: TC-023
type: test-case
status: Ready
test_type: [Unit, Integration]
created: 2026-10-08
perspective: Happy Path
priority: High
criterion: AC-013
parent: US-002
created_by: juanca202
---
# TC-023 — Dado un archivo recibido completo, Cuando se compara con el original, Entonces es idéntico byte a byte

## Precondiciones

- Protocolo y receptor ejecutables sin cámara.

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| Archivo | prueba-1MB.bin [propuesto] | Binario determinista de 1 MB (1 048 576 B) |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Sistema | Transferir prueba-1MB.bin por el protocolo | Recepción completada |
| 2 | Sistema | Comparar byte a byte con el original | Sin diferencias |

## Resultado esperado final

El archivo recibido es idéntico al original.

## Observaciones

Entorno de referencia: desarrollo local (supuesto confirmado por el usuario).
