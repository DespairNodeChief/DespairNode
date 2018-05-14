const express = require('express');
var purchaseDetailController = require('../controllers/purchaseDetailController');
var ensureToken = require('../middlewares/ensureToken');

module.exports = function (app){

  app.get('/purchaseDetail/listPurchaseDetails', ensureToken.ensureToken, purchaseDetailController.listPurchaseDetails);
  app.post('/purchaseDetail/createPurchaseDetail', ensureToken.ensureToken, purchaseDetailController.createPurchaseDetail);
  app.put('/purchaseDetail/updatePurchaseDetail/:purchaseDetailID', ensureToken.ensureToken, purchaseDetailController.updatePurchaseDetail);
  app.delete('/purchaseDetail/deletePurchaseDetail/:purchaseDetailID', ensureToken.ensureToken, purchaseDetailController.deletePurchaseDetail);

}
