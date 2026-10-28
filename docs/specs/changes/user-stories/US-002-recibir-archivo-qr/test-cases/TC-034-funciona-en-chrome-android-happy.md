---
id: TC-034
type: test-case
status: Ready
test_type: [Manual]
created: 2026-10-08
perspective: Happy Path
priority: High
criterion: AC-022
parent: US-002
created_by: juanca202
---
# TC-034 — Dado Chrome para Android, Cuando se abre la app y se recibe un archivo, Entonces la recepción funciona

## Precondiciones

- Móvil Android con Chrome y túnel HTTPS a la app en desarrollo; segundo dispositivo o pantalla como emisor (guion `spike/GUIA-MEDICION.md` de la rama `spike/WI-002-medicion-qr-android`).

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| Archivo | prueba-100KB.bin [propuesto] | Binario determinista de 100 KB (102 400 B) |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Usuario | Abrir la app en Chrome para Android (probado: Chrome 154, Android 10) | La app abre |
| 2 | Usuario | Recibir prueba-100KB.bin | Recepción completada |

## Resultado esperado final

La recepción funciona en Chrome para Android.

## Observaciones

Entorno de referencia: desarrollo local (supuesto confirmado por el usuario).
