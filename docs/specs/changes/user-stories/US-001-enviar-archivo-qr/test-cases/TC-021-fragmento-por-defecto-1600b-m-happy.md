---
id: TC-021
type: test-case
status: Ready
test_type: [Unit]
created: 2026-10-08
perspective: Happy Path
priority: High
criterion: AC-016
parent: US-001
created_by: juanca202
---
# TC-021 — Dado un envío con parámetros por defecto, Cuando se fragmenta y se codifica, Entonces cada fragmento lleva 1600 B de datos con corrección M

## Precondiciones

- Protocolo y codificación de QR ejecutables sin cámara.

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| Archivo | prueba-100KB.bin [propuesto] | Binario determinista de 100 KB (102 400 B) |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Sistema | Fragmentar prueba-100KB.bin sin configurar parámetros | Los fragmentos de datos tienen 1600 B |
| 2 | Sistema | Codificar un fragmento en QR | El nivel de corrección es M |

## Resultado esperado final

El tamaño por defecto es 1600 B de datos por QR con corrección M, con una velocidad por defecto de 8 QR por segundo.

## Observaciones

Entorno de referencia: desarrollo local (supuesto confirmado por el usuario).
