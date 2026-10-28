---
id: TC-014
type: test-case
status: Ready
test_type: [E2E]
created: 2026-10-08
perspective: Error
priority: High
criterion: AC-005
parent: US-003
created_by: juanca202
---
# TC-014 — Dado un historial con archivos, Cuando el usuario no pulsa Exportar, Entonces ninguna descarga ni compartición se produce

## Precondiciones

- App servida en desarrollo local (`ng serve` o build local) y abierta en Chrome; sin cuentas ni servidor (entorno de referencia: desarrollo).
- Historial sembrado; registro de descargas del navegador vacío.

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| Historial | Historial sembrado [propuesto]: recibido «foto.png» (20 KB, hace 3 días), enviado «informe.pdf» (150 KB, hace 2 días), recibido «notas.txt» (2 KB, hace 1 día), enviado «datos.bin» (100 KB, hace 1 hora) | — |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Usuario | Usar la pantalla (abrir, filtrar, eliminar y cancelar) sin pulsar Exportar | No se inicia ninguna descarga ni hoja de compartir |
| 2 | Sistema | Pulsar Exportar en una fila | Solo entonces se genera la salida del archivo |

## Resultado esperado final

La exportación es la única salida de archivos y siempre la inicia el usuario.

## Observaciones

Entorno de referencia: desarrollo local, Chrome (confirmado por el usuario).
