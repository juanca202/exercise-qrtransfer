---
id: TC-003
type: test-case
status: Ready
test_type: [Unit]
created: 2026-10-08
perspective: Error
priority: High
criterion: AC-002
parent: US-002
created_by: juanca202
---
# TC-003 — Dado un receptor con una transferencia activa confirmada, Cuando llegan fragmentos de otra transferencia, Entonces se descartan sin afectar el resultado

## Precondiciones

- Receptor ejecutable sin cámara.

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| Archivo | prueba-100KB.bin [propuesto] | Binario determinista de 100 KB (102 400 B) |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Sistema | Activar una transferencia A | Queda fijada |
| 2 | Sistema | Entregar fragmentos de una transferencia B | Se descartan como ajenos |
| 3 | Sistema | Completar A | Se reconstruye A intacta |

## Resultado esperado final

Los fragmentos ajenos no alteran el resultado.

## Observaciones

Entorno de referencia: desarrollo local (supuesto confirmado por el usuario).
