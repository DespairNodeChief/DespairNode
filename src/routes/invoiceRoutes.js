const express = require('express');
var invoiceController = require('../controllers/invoiceController');
var ensureToken = require('../middlewares/ensureToken');

module.exports = function (app){

  app.get('/invoice/listInvoices', ensureToken.ensureToken, invoiceController.listInvoices);
  app.post('/invoice/createInvoice', ensureToken.ensureToken, invoiceController.createInvoice);
  app.put('/invoice/updateInvoice/:InvoiceID', ensureToken.ensureToken, invoiceController.updateInvoice);
  app.delete('/invoice/deleteInvoice/:InvoiceID', ensureToken.ensureToken, invoiceController.deleteInvoice);
  app.get('/invoice/reportInvoice', ensureToken.ensureToken, invoiceController.reportInvoice);
}
