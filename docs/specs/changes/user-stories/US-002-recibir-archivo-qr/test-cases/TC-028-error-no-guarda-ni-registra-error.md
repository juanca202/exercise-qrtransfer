---
id: TC-028
type: test-case
status: Ready
test_type: [Integration]
created: 2026-10-08
perspective: Error
priority: High
criterion: AC-018
parent: US-002
created_by: juanca202
---
# TC-028 — Dado un resultado «incompleta», «datos inválidos» o «no reconstruible», Cuando termina la recepción, Entonces no se guarda el archivo ni se registra en el historial

## Precondiciones

- App servida en desarrollo local (`ng serve` o build local) y abierta en Chrome; sin cuentas ni servidor (entorno de referencia: desarrollo).

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| Archivo | prueba-100KB.bin [propuesto] | Binario determinista de 100 KB (102 400 B) |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Sistema | Provocar cada uno de los tres resultados | Resultado de error |
| 2 | Sistema | Consultar almacenamiento e historial | Sin archivo guardado y sin entrada nueva |

## Resultado esperado final

Ningún resultado de error deja archivo ni entrada en el historial.

## Observaciones

Entorno de referencia: desarrollo local (supuesto confirmado por el usuario). Verifica BR-03.
