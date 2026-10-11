# WF-001: Inicio e historial

<!-- wireframe:review-status=approved -->
**Estado:** Aprobado
**Tipo de solución:** Aplicación web — responsiva
**Origen:** [SRS-001: Transferencia de archivos mediante secuencia de QR](../README.md)
**Requisitos relacionados:** FR-001, FR-007, FR-016, FR-018, FR-019, FR-022, NFR-002, NFR-006

Pantalla de entrada: cabecera «QRTransfer», dos tarjetas con icono (Enviar / Recibir) y, debajo, «Actividad reciente» con el historial de transferencias y sus filtros (FR-016, FR-019). Enviar y Recibir abren su flujo como hoja inferior sobre esta pantalla, que queda atenuada detrás; en escritorio la hoja es un diálogo centrado (FR-001, FR-007).

## Wireframe

Vista de escritorio (ancho):

![Wireframe de Inicio e historial](./WF-001-inicio-historial.svg)

Vista móvil (retrato, responsiva):

![Wireframe móvil de Inicio e historial](./WF-001-inicio-historial-movil.svg)

## Componentes

- Tarjeta Enviar (`mat-card`; icono, «Enviar» y «Transfiere archivos mediante QR»): abre el selector de archivos del dispositivo; al elegir un archivo pasa a [WF-002](WF-002-enviar-seleccion.md). En escritorio queda junto a Recibir y en móvil debajo.
- Tarjeta Recibir (`mat-card`; icono, «Recibir» y «Escanea código QR para recibir datos»): abre [WF-004](WF-004-recibir-escaneo.md).
- «Actividad reciente»: filas con icono de dirección, nombre, movimiento, tamaño y antigüedad, con filtro Todos / Recibidos / Enviados (`mat-button-toggle-group` con un `mat-button-toggle` por opción, selección única, «Todos» por defecto).
- Menú ⋮ por fila: Exportar y Eliminar.

## Estados

- Historial vacío: mensaje «Aún no hay transferencias» en lugar de la tabla.
