---
id: TC-012
type: test-case
status: Ready
test_type: [Integration, E2E]
created: 2026-10-08
perspective: Happy Path
priority: Medium
criterion: AC-010
parent: US-001
created_by: juanca202
---
# TC-012 — Dado un archivo elegido para enviar, Cuando se inicia el envío, Entonces se guarda una copia en el almacenamiento privado y figura en el historial

## Precondiciones

- App servida en desarrollo local (`ng serve` o build local) y abierta en Chrome; sin cuentas ni servidor (entorno de referencia: desarrollo).

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| Archivo | prueba-100KB.bin [propuesto] | Binario determinista de 100 KB (102 400 B) |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Usuario | Elegir prueba-100KB.bin | Comienza la emisión |
| 2 | Usuario | Cancelar y abrir el historial | Aparece una entrada «enviado» con el archivo y su contenido |

## Resultado esperado final

El historial contiene la copia del archivo enviado.

## Observaciones

Entorno de referencia: desarrollo local (supuesto confirmado por el usuario).
