---
id: TC-009
type: test-case
status: Ready
test_type: [Integration, E2E]
created: 2026-10-08
perspective: Boundary
priority: Medium
criterion: AC-003
parent: US-003
created_by: juanca202
---
# TC-009 — Dado un archivo con espacios, acentos y varios puntos en el nombre, Cuando se exporta por descarga, Entonces el nombre exportado es el original

## Precondiciones

- App servida en desarrollo local (`ng serve` o build local) y abierta en Chrome; sin cuentas ni servidor (entorno de referencia: desarrollo).
- Historial con un archivo de nombre especial.

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| Archivo | «Informe final – año 2026.v2.pdf» [propuesto] | Espacios, acento, eñe y doble punto |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Usuario | Pulsar Exportar y descargar el archivo | Inicia la descarga |
| 2 | Usuario | Revisar el nombre del archivo descargado | Es «Informe final – año 2026.v2.pdf» |

## Resultado esperado final

El nombre original se conserva íntegro.

## Observaciones

Entorno de referencia: desarrollo local, Chrome (confirmado por el usuario). Si el saneamiento de nombres (tarea de la US) modifica algún carácter, documentarlo y ajustar este TC.
