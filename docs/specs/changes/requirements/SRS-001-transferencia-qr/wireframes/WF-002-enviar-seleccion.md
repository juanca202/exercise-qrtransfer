# WF-002: Enviar: QR e información del archivo

<!-- wireframe:review-status=approved -->
**Estado:** Aprobado
**Tipo de solución:** Aplicación web — responsiva
**Origen:** [SRS-001: Transferencia de archivos mediante secuencia de QR](../README.md)
**Requisitos relacionados:** FR-001, FR-002, FR-003, FR-004, FR-005, FR-006, FR-014, FR-017, FR-018, FR-026, FR-028, FR-031, FR-032, FR-033

Tras elegir el archivo, una hoja inferior sobre el inicio (atenuado) muestra la información del archivo en la cabecera y debajo el área con la secuencia de QR en bucle y su barra de posición (FR-002, FR-005, FR-028). El emisor no sabe cuánto ha recibido el otro dispositivo (no hay canal de retorno), por lo que no muestra progreso de transmisión (FR-006). La hoja se cierra tocando fuera de ella o arrastrándola, lo que detiene la transmisión (FR-014).

## Wireframe

Vista de escritorio (ancho):

![Wireframe de Enviar: QR e información](./WF-002-enviar-seleccion.svg)

Vista móvil (retrato, responsiva):

![Wireframe móvil de Enviar: QR e información](./WF-002-enviar-seleccion-movil.svg)

## Componentes

- Contenedor: en móvil la hoja inferior es un `mat-bottomsheet` (MatBottomSheet) y en escritorio, un diálogo centrado con `mat-dialog` (MatDialog); el contenido es el mismo y el inicio queda atenuado detrás.
- Cabecera de la hoja: icono de envío, nombre, tipo, tamaño, QR totales y tiempo estimado por vuelta.
- Menú ⋮ junto al nombre del archivo, siempre con las opciones desplegadas y la elegida marcada con ✓ (FR-031, FR-032).
- Opción de densidad (FR-032), en el menú ⋮: «Densidad» con 200, 400, 800, 1200 y 1600 B por QR (1600 por defecto); cambiarla reinicia la transferencia y se avisa en el aviso de la hoja.
- Opción de velocidad (FR-031), en el menú ⋮: «Velocidad» con 4, 6, 8, 10 y 12 QR por segundo (8 por defecto).
- Las opciones de densidad y velocidad muestran la última elección del usuario, recordada entre visitas (FR-033).
- Área del QR: muestra el primer QR fijo al elegir el archivo; un solo QR en pantalla. Es pulsable: el primer toque inicia la secuencia en bucle (velocidad automática) y los siguientes reinician la vuelta; en ambos casos mantiene el primer QR unos 3 s para que el receptor pueda capturarlo (FR-005, FR-026).
- Texto de ayuda bajo el QR: «Toca el QR para iniciar o reiniciar la vuelta».
- Barra de posición (FR-028): bajo el QR, barra horizontal con una marca vertical que indica qué QR de la vuelta se muestra y, debajo, «QR n de N». Se puede tocar o arrastrar (o usar el teclado) para elegir desde qué QR continúa la secuencia; el QR elegido se retiene unos 3 s.
- Cierre de la hoja (sin opción «Cancelar»; FR-014): al tocar fuera de ella o arrastrarla se detiene la transmisión (única forma de terminar la secuencia en el emisor) y se liberan los recursos.
