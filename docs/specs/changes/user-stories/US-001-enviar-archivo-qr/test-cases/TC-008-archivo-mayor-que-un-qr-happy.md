---
id: TC-008
type: test-case
status: Ready
test_type: [Unit, Integration]
created: 2026-10-08
perspective: Happy Path
priority: High
criterion: AC-006
parent: US-001
created_by: juanca202
---
# TC-008 — Dado un archivo mayor que la capacidad de un QR, Cuando se fragmenta, Entonces se generan múltiples QR que reconstruyen el archivo

## Precondiciones

- Protocolo ejecutable sin interfaz ni cámara.

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| Archivo | prueba-100KB.bin [propuesto] | Binario determinista de 100 KB (102 400 B) |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Sistema | Fragmentar prueba-100KB.bin con fragmentos de 1600 B (el tamaño por defecto) | Se generan más de 60 fragmentos |
| 2 | Sistema | Reensamblarlos en el receptor | El archivo resultante es idéntico al original |

## Resultado esperado final

El archivo se reconstruye idéntico a partir de múltiples QR.

## Observaciones

Entorno de referencia: desarrollo local (supuesto confirmado por el usuario).
