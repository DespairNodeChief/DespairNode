const express = require('express');
var invoiceDetailController = require('../controllers/invoiceDetailController');
var ensureToken = require('../middlewares/ensureToken');

module.exports = function (app){

  app.get('/invoiceDetail/listInvoiceDetails', ensureToken.ensureToken, invoiceDetailController.listInvoiceDetails);
  app.post('/invoiceDetail/createInvoiceDetail', ensureToken.ensureToken, invoiceDetailController.createInvoiceDetail);
  app.put('/invoiceDetail/updateInvoiceDetail/:invoiceDetailID', ensureToken.ensureToken, invoiceDetailController.updateInvoiceDetail);
  app.delete('/invoiceDetail/deleteInvoiceDetail/:invoiceDetailID', ensureToken.ensureToken, invoiceDetailController.deleteInvoiceDetail);

}
