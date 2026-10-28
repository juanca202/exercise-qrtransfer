---
type: story-validation
story: ./README.md
updated: 2026-10-09
story_points: 8
---
# Validación — US-001: Enviar un archivo como secuencia de QR

## Complejidad sugerida

- **Story points:** 8
- **Justificación:** Incluye el protocolo de fragmentación y la visualización en bucle. El spike redujo la incertidumbre técnica (lectura de 400 B validada); el riesgo restante es el tiempo de 1 MB y la regla de velocidad.

## INVEST

| Letra | Criterio      | Resultado | Notas |
| ----- | ------------- | --------- | ----- |
| **I** | Independiente | Cumple    | El spike se completó; es prerrequisito de la US-002. |
| **N** | Negociable    | Cumple    | Velocidad y tamaño mayor de fragmento negociables con validación. |
| **V** | Valiosa       | Cumple    | Permite iniciar una transferencia sin red. |
| **E** | Estimable     | Cumple    | Con los resultados del spike se puede estimar. |
| **S** | Pequeña       | Parcial   | 19 criterios; valorar dividir (protocolo / emisión) al planificar tareas. |
| **T** | Testeable     | Cumple    | Cada criterio es verificable; AC-017 con transferencias reales. |

## Definition of Ready (DoR)

| Criterio DoR                       | Estado    | Notas |
| ---------------------------------- | --------- | ----- |
| Dependencias listas                | Cumple    | Spikes completados. |
| Inputs/outputs claros              | Cumple    | Archivo de entrada; secuencia de QR e información de salida. |
| Repositorios definidos             | Cumple    | exercise-qrtransfer. |
| Sin decisiones técnicas pendientes | Cumple    | Fragmento y corrección de errores decididos; el resto se resuelve en las tareas. |
| Referencias de UI                  | Cumple    | WF-002 aprobado. |
| Sin aclaraciones pendientes        | Cumple    | Sin preguntas abiertas a producto; lagunas técnicas delegadas a las tareas. |
