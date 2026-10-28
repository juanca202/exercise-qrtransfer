---
id: TC-017
type: test-case
status: Ready
test_type: [E2E]
created: 2026-10-08
perspective: Happy Path
priority: High
criterion: AC-013
parent: US-001
created_by: juanca202
---
# TC-017 — Dado la app cargada una vez con red, Cuando se desactiva la red y se envía un archivo, Entonces el envío funciona completamente

## Precondiciones

- App servida en desarrollo local (`ng serve` o build local) y abierta en Chrome; sin cuentas ni servidor (entorno de referencia: desarrollo).

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| Archivo | prueba-100KB.bin [propuesto] | Binario determinista de 100 KB (102 400 B) |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Sistema | Cargar la app con red y registrar el service worker | La app queda cacheada |
| 2 | Sistema | Pasar a modo sin conexión y recargar | La app abre |
| 3 | Usuario | Enviar prueba-100KB.bin | La emisión comienza normalmente |

## Resultado esperado final

El envío funciona sin conexión.

## Observaciones

Entorno de referencia: desarrollo local (supuesto confirmado por el usuario).
