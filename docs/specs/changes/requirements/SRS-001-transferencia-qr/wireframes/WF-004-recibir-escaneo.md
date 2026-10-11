# WF-004: Recibir: escaneo e información

<!-- wireframe:review-status=approved -->
**Estado:** Aprobado
**Tipo de solución:** Aplicación web — responsiva
**Origen:** [SRS-001: Transferencia de archivos mediante secuencia de QR](../README.md)
**Requisitos relacionados:** FR-007, FR-008, FR-009, FR-010, FR-011, FR-013, FR-014, FR-022, FR-023, FR-027, FR-029, FR-036

Hoja inferior sobre el inicio (atenuado) con la cabecera del archivo (icono de recepción, nombre, «QR n de N» y menú ⋮) y la vista de cámara con el recuadro de detección (FR-007, FR-036). Debajo, la fila de datos (peso, tiempo restante, porcentaje; FR-011), la barra de fragmentos (FR-029) y el botón «Cerrar» (FR-013). Al completarse todos los fragmentos se verifica y guarda sin intervención, y se pasa a [WF-005](WF-005-resultado-recepcion.md).

## Wireframe

Vista de escritorio (ancho):

![Wireframe de Recibir: escaneo e información](./WF-004-recibir-escaneo.svg)

Vista móvil (retrato, responsiva):

![Wireframe móvil de Recibir: escaneo e información](./WF-004-recibir-escaneo-movil.svg)

## Componentes

- Contenedor: en móvil la hoja inferior es un `mat-bottomsheet` (MatBottomSheet) y en escritorio, un diálogo centrado con `mat-dialog` (MatDialog); el contenido es el mismo y el inicio queda atenuado detrás.
- Vista de cámara sin marco fijo (FR-036): el recuadro aparece sobre el QR solo mientras la cámara lo detecta, alineado con su posición, se mantiene unos 0,4 s si un cuadro falla y desaparece al detener la lectura.
- Información: nombre, tamaño total, tiempo estimado restante, fragmentos recibidos de total.
- Fila de datos (FR-011): bajo el nombre del archivo, una fila con reparto uniforme (`justify-between`) con, en este orden, el peso del archivo, el tiempo aproximado restante y el porcentaje de progreso.
- Barra de fragmentos (FR-029): única barra de la pantalla, bajo la fila de datos; con el orden de los QR, los recibidos se pintan en verde y los que faltan quedan en gris, para saber qué tramo buscar en el emisor. Su leyenda incluye «N de M fragmentos» (oculto en pantallas estrechas).
- Botón Cerrar (antes «Terminar lectura»): el usuario da por terminada la lectura; si faltan fragmentos, el resultado es «incompleta» ([WF-005](WF-005-resultado-recepcion.md)).
- Cancelar (en el menú ⋮ de la cabecera de la hoja): descarta lo recibido y libera la cámara, sin confirmación.

## Estados

- Sin permiso de cámara: mensaje que pide conceder el permiso y botón para reintentar.
- Esperando primer QR: información y progreso vacíos hasta leer el primer fragmento.
- Transferencia activa: tomada la primera cuyos metadatos se leyeron, el receptor ignora los fragmentos de otras durante la recepción (FR-023); al completarse todos los fragmentos se verifica y guarda sin intervención.

## Notas

- Sin aviso de confirmación (FR-023): al leer los metadatos la transferencia se activa sola y la información de nombre, tamaño y fragmentos se actualiza de inmediato.
- Panel de diagnóstico (FR-027): línea de contadores visible solo al abrir la pantalla con `?debug`; no forma parte de la interfaz normal.
