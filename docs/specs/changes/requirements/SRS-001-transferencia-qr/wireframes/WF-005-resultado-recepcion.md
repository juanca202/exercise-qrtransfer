# WF-005: Resultado de la recepción y previsualización

<!-- wireframe:review-status=approved -->
**Estado:** Aprobado
**Tipo de solución:** Aplicación web — responsiva
**Origen:** [SRS-001: Transferencia de archivos mediante secuencia de QR](../README.md)
**Requisitos relacionados:** FR-012, FR-013, FR-014, FR-015, FR-016, FR-020, FR-021, FR-022, NFR-007

Al recibir todo el archivo, una hoja inferior sobre el inicio muestra la marca de éxito, el mensaje «Archivo <nombre> recibido exitosamente.», la previsualización y solo dos botones: «Abrir» y «Descargar» (FR-020). La hoja se cierra al tocar fuera de ella o al arrastrarla y deja visible el historial actualizado en [WF-001](WF-001-inicio-historial.md). Si la transferencia no termina bien, informa el resultado en la misma hoja (FR-013, FR-021).

## Wireframe

Vista de escritorio (ancho):

![Wireframe de Resultado de la recepción](./WF-005-resultado-recepcion.svg)

Vista móvil (retrato, responsiva):

![Wireframe móvil de Resultado de la recepción](./WF-005-resultado-recepcion-movil.svg)

## Componentes

- Contenedor: en móvil la hoja inferior es un `mat-bottomsheet` (MatBottomSheet) y en escritorio, un diálogo centrado con `mat-dialog` (MatDialog); el contenido es el mismo y el inicio queda atenuado detrás.
- Previsualización: si el archivo es imagen, se muestra la imagen; si es otro tipo, un icono de archivo con su nombre. Al hacer clic en ella se abre el archivo.
- Botones Abrir y Descargar: únicas acciones de la hoja. Al cerrarla se vuelve al inicio, donde el historial (con filtros y Exportar / Eliminar, como en [WF-001](WF-001-inicio-historial.md)) incluye el archivo recién recibido.

## Estados

- Error (incompleta, datos inválidos, no reconstruible, almacenamiento lleno): tarjeta de resultado con su acción (Seguir escaneando / Reintentar); el historial queda en el inicio; no se guarda ningún archivo — [escritorio](WF-005-resultado-recepcion-error.svg), [móvil](WF-005-resultado-recepcion-error-movil.svg).
- Error «almacenamiento lleno» (FR-013, FR-022): tarjeta que informa que la cuota se agotó, no se guardó ni registró nada y ofrece descargar el archivo recién recibido y Reintentar — mismos SVG de error.
