---
id: TC-007
type: test-case
status: Ready
test_type: [Unit]
created: 2026-10-08
perspective: Happy Path
priority: High
criterion: AC-005
parent: US-001
created_by: juanca202
---
# TC-007 — Dado un archivo con nombre y tipo conocidos, Cuando se fragmenta, Entonces el fragmento de metadatos permite al receptor recuperar nombre y tipo idénticos

## Precondiciones

- Protocolo ejecutable sin interfaz ni cámara.

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| Archivo | informe.pdf, application/pdf [propuesto] | Contenido de 5 KB determinista |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Sistema | Fragmentar un archivo «informe.pdf» de tipo application/pdf | Se genera el fragmento de metadatos |
| 2 | Sistema | Leer los metadatos con el receptor | Nombre y tipo coinciden con los originales |

## Resultado esperado final

El nombre y el tipo recuperados son idénticos a los del archivo original.

## Observaciones

Entorno de referencia: desarrollo local (supuesto confirmado por el usuario).
