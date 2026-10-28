---
id: TC-041
type: test-case
status: Ready
test_type: [E2E]
created: 2026-10-09
perspective: Happy Path
priority: High
criterion: AC-027
parent: US-002
created_by: juanca202
---
# TC-041 — Dado que la app se cargó con red, Cuando se pierde la conexión, Entonces el lector WebAssembly sigue disponible y la recepción se completa sin peticiones de red

## Precondiciones

- App servida en desarrollo local (`ng serve` o build local) y abierta en Chrome; la pantalla de recepción cargada con red (entorno de referencia: desarrollo).

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| Archivo | prueba-100KB.bin [propuesto] | Binario determinista de 100 KB (102 400 B) |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Sistema | Abrir `/recibir` con red | El módulo `zxing_reader.wasm` se pide al abrir la recepción, antes del primer cuadro |
| 2 | Sistema | Cortar la conexión | La pantalla sigue operativa |
| 3 | Sistema | Entregar la secuencia de QR | La recepción se completa y el archivo es idéntico, sin ninguna petición de red |

## Resultado esperado final

El lector de QR forma parte de la aplicación y funciona sin conexión; el `.wasm` está en la lista de recursos precacheados del service worker.

## Observaciones

Entorno de referencia: desarrollo local (supuesto confirmado por el usuario). SRS-001 NFR-013. En producción el service worker sirve `/zxing/zxing_reader.wasm` desde la caché.
