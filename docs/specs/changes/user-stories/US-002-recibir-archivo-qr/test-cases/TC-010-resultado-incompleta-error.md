---
id: TC-010
type: test-case
status: Ready
test_type: [Unit, E2E]
created: 2026-10-08
perspective: Error
priority: High
criterion: AC-007
parent: US-002
created_by: juanca202
---
# TC-010 — Dado una recepción con fragmentos faltantes, Cuando el usuario pulsa «Terminar lectura», Entonces el resultado es «incompleta»

## Precondiciones

- App servida en desarrollo local (`ng serve` o build local) y abierta en Chrome; sin cuentas ni servidor (entorno de referencia: desarrollo).

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| Archivo | prueba-100KB.bin [propuesto] | Binario determinista de 100 KB (102 400 B) |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Sistema | Entregar el 50 % de los fragmentos | Faltan fragmentos |
| 2 | Usuario | Pulsar «Terminar lectura» | Se muestra «incompleta» |

## Resultado esperado final

Se informa «incompleta».

## Observaciones

Entorno de referencia: desarrollo local (supuesto confirmado por el usuario).
