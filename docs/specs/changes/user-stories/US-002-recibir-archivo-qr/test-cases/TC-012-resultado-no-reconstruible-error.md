---
id: TC-012
type: test-case
status: Ready
test_type: [Unit]
created: 2026-10-08
perspective: Error
priority: High
criterion: AC-007
parent: US-002
created_by: juanca202
---
# TC-012 — Dado fragmentos con metadatos inconsistentes, Cuando no se puede ensamblar el archivo, Entonces el resultado es «no reconstruible»

## Precondiciones

- Receptor ejecutable sin cámara.

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| Archivo | prueba-100KB.bin [propuesto] | Binario determinista de 100 KB (102 400 B) |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Sistema | Corromper el fragmento de metadatos conservando su CRC válido | Metadatos ilegibles |
| 2 | Sistema | Entregar todos | Se informa «no reconstruible» |

## Resultado esperado final

Se informa «no reconstruible».

## Observaciones

Entorno de referencia: desarrollo local (supuesto confirmado por el usuario).
