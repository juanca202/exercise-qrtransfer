---
id: TC-005
type: test-case
status: Ready
test_type: [E2E]
created: 2026-10-08
perspective: Boundary
priority: Medium
criterion: AC-002
parent: US-003
created_by: juanca202
---
# TC-005 — Dado un historial mixto, Cuando se abre la pantalla y luego se vuelve a Todos tras filtrar, Entonces se muestran todas las transferencias

## Precondiciones

- App servida en desarrollo local (`ng serve` o build local) y abierta en Chrome; sin cuentas ni servidor (entorno de referencia: desarrollo).
- Historial mixto sembrado.

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| Historial | Historial sembrado [propuesto]: recibido «foto.png» (20 KB, hace 3 días), enviado «informe.pdf» (150 KB, hace 2 días), recibido «notas.txt» (2 KB, hace 1 día), enviado «datos.bin» (100 KB, hace 1 hora) | Cuatro entradas |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Usuario | Abrir la pantalla de inicio | El filtro «Todos» está seleccionado por defecto y se ven las 4 entradas |
| 2 | Usuario | Pulsar «Recibidos» y luego «Todos» | Vuelven a verse las 4 entradas |

## Resultado esperado final

El filtro Todos es el predeterminado y restablece la lista completa.

## Observaciones

Entorno de referencia: desarrollo local, Chrome (confirmado por el usuario). Fuente del valor por defecto: SRS-001 sección 11 (WF-001/WF-005).
