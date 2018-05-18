var fs = require('fs');
var PDFDocument = require('pdfkit');
var doc = new PDFDocument;
doc.pipe(fs.createWriteStream('nombre-de-pdf.pdf'));
// lógica para crear el documento PDF va aquí
doc.end();

// Establecemos un titulo y le pasamos las coordenadas X y Y.
doc.fontSize(15).text('¡ Mi Titulo !', 50, 50);

// Establecemos la anchura y el tipo de alineación de nuestros parrafos.
doc.text('Lorem ipsum carrot cake soufflé pie. Oat cake bear claw jujubes powder danish lollipop jelly beans gingerbread sweet roll.', {
  width: 410, // anchura en px
  align: 'left' // tipo de alineación (left, center, right o justify)
});

// doc.image('mi-imagen.jpg', 50, 150, {width: 300});
