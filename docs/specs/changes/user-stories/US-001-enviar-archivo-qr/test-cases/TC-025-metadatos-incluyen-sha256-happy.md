---
id: TC-025
type: test-case
status: Ready
test_type: [Unit]
created: 2026-10-08
perspective: Happy Path
priority: High
criterion: AC-019
parent: US-001
created_by: juanca202
---
# TC-025 — Dado un archivo conocido, Cuando se genera el fragmento de metadatos, Entonces incluye el hash SHA-256 del archivo completo

## Precondiciones

- Protocolo ejecutable sin interfaz ni cámara.

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| Archivo | prueba-100KB.bin [propuesto] | Binario determinista de 100 KB (102 400 B) |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Sistema | Fragmentar prueba-100KB.bin | Se genera el fragmento de metadatos |
| 2 | Sistema | Leer el hash de los metadatos y calcular el SHA-256 del archivo | Ambos valores coinciden |

## Resultado esperado final

Los metadatos contienen el SHA-256 correcto del archivo.

## Observaciones

Entorno de referencia: desarrollo local (supuesto confirmado por el usuario).
