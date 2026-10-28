---
id: TC-037
type: test-case
status: Ready
test_type: [Manual]
created: 2026-10-08
perspective: Happy Path
priority: Medium
criterion: AC-024
parent: US-002
created_by: juanca202
---
# TC-037 — Dado un archivo de 1 MB, Cuando se recibe con cámara real, Entonces se completa en 15 minutos o menos

## Precondiciones

- Móvil Android con Chrome y túnel HTTPS a la app en desarrollo; segundo dispositivo o pantalla como emisor (guion `spike/GUIA-MEDICION.md` de la rama `spike/WI-002-medicion-qr-android`).

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| Archivo | prueba-1MB.bin [propuesto] | Binario determinista de 1 MB (1 048 576 B) |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Usuario | Iniciar el envío de prueba-1MB.bin y la recepción | Comienza la transferencia |
| 2 | Usuario | Cronometrar hasta «completada» | Se completa |
| 3 | Usuario | Registrar el tiempo | ≤ 15 min con hash idéntico |

## Resultado esperado final

1 MB se recibe en 15 minutos o menos (objetivo DEBERÍA).

## Observaciones

Entorno de referencia: desarrollo local (supuesto confirmado por el usuario). Objetivo no validado en el spike. Repetir 10 veces.
