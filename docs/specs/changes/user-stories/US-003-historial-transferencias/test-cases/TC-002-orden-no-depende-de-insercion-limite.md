---
id: TC-002
type: test-case
status: Ready
test_type: [Unit]
created: 2026-10-08
perspective: Boundary
priority: Medium
criterion: AC-001
parent: US-003
created_by: juanca202
---
# TC-002 — Dado entradas guardadas en un orden distinto al cronológico, Cuando se obtiene el historial, Entonces se ordenan por fecha de transferencia de la más reciente a la más antigua

## Precondiciones

- Lógica de historial aislada, con almacenamiento simulado.

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| Entradas | [propuesto] tres entradas insertadas con fechas T3, T1, T2 (T1 < T2 < T3) | Inserción desordenada |
| Variante | [propuesto] dos entradas con el mismo instante | Solo debe ser estable; no se exige un orden concreto |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Sistema | Insertar las entradas y solicitar el historial | Se devuelven en orden T3, T2, T1 |
| 2 | Sistema | Solicitar el historial con las dos entradas del mismo instante | Ambas aparecen, sin pérdida ni duplicado |

## Resultado esperado final

El orden depende solo de la fecha de transferencia y no se pierde ninguna entrada.

## Observaciones

Entorno de referencia: desarrollo local, Chrome (confirmado por el usuario). Supuesto: la regla de desempate no está especificada; solo se verifica que no haya pérdidas.
