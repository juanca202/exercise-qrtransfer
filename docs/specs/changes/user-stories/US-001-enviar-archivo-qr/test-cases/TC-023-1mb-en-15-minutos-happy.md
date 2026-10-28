---
id: TC-023
type: test-case
status: Ready
test_type: [Manual]
created: 2026-10-08
perspective: Happy Path
priority: Medium
criterion: AC-017
parent: US-001
created_by: juanca202
---
# TC-023 — Dado un archivo de 1 MB, Cuando se transfiere con cámara real entre dos dispositivos, Entonces la transferencia se completa en 15 minutos o menos

## Precondiciones

- Móvil Android con Chrome y túnel HTTPS a la app en desarrollo; segundo dispositivo o pantalla como emisor (guion `spike/GUIA-MEDICION.md` de la rama `spike/WI-002-medicion-qr-android`).

## Datos de prueba

| Campo | Valor | Notas |
|-------|-------|-------|
| Archivo | prueba-1MB.bin [propuesto] | Binario determinista de 1 MB (1 048 576 B) |

## Pasos de ejecución

| # | Actor | Acción | Resultado esperado del paso |
|---|-------|--------|-----------------------------|
| 1 | Usuario | Enviar prueba-1MB.bin desde el emisor | Comienza la emisión |
| 2 | Usuario | Recibir con el móvil y cronometrar | Se completa la recepción |
| 3 | Usuario | Registrar el tiempo | ≤ 15 min con hash idéntico |

## Resultado esperado final

1 MB se transfiere en 15 minutos o menos (objetivo DEBERÍA).

## Observaciones

Entorno de referencia: desarrollo local (supuesto confirmado por el usuario). Objetivo no validado en el spike (modelo: 36,9 min a 5 fps con 400 B). Repetir 10 veces con la mejor combinación.
