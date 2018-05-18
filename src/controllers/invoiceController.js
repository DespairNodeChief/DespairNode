var fs = require('fs');
var PDFDocument = require('pdfkit');

const invoiceModel = require('../models/invoiceModel');

function listInvoices(req, res){
  invoiceModel.listInvoices((error, data) => {
    res.status(200).json(data);
  })
}

function createInvoice(req, res){
  const invoiceData = {
    InvoiceID: null,
    InvoiceDate: req.body.InvoiceDate,
    ClientName: req.body.ClientName,
    ClientLastName: req.body.ClientLastName,
    ClientNIT: req.body.ClientNIT,
    Total: req.body.Total,
    BusinessID: req.body.BusinessID
  }

  invoiceModel.createInvoice(invoiceData, (error, data) => {
    if(data){
      res.status(200).json(data)
    } else {
      res.status(500).json({msg: 'Error'})
    }
  })
}

function updateInvoice(req, res){
  const invoiceData = {
    InvoiceID: req.param.InvoiceID,
    InvoiceDate: req.body.InvoiceDate,
    ClientName: req.body.ClientName,
    ClientLastName: req.body.ClientLastName,
    ClientNIT: req.body.ClientNIT,
    Total: req.body.Total,
    BusinessID: req.body.BusinessID
  }

  invoiceData.updateInvoice(invoiceData, (err, data) => {
    if(data && data.msg){
      res.status(200).json(data);
    } else  {
      res.status(500).json({msg: 'Error'})
    }
  })
}

function deleteInvoice(req, res){
  invoiceModel.deleteInvoice(req.params.InvoiceID, (error, data) => {
    if(data && data.msg){
      res.status(200).json(data);
    } else {
      res.status(500).json({msg: 'Error'})
    }
  })
}

function reportInvoice(req, res){
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
}

module.exports = {
    listInvoices,
    createInvoice,
    updateInvoice,
    deleteInvoice,
    reportInvoice
}
