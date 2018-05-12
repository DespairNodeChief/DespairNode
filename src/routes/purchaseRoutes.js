const express = require('express');
var purchaseController = require('../controllers/purchaseController');
var ensureToken = require('../middlewares/ensureToken');

module.exports = function (app){

  app.get('/purchase/listPurchases', ensureToken.ensureToken, purchaseController.listPurchases);
  app.post('/purchase/createPurchase', ensureToken.ensureToken, purchaseController.createPurchase);
  app.put('/purchase/updatePurchase/:PurchaseID', ensureToken.ensureToken, purchaseController.updatePurchase);
  app.delete('/purchase/deletePurchase/:PurchaseID', ensureToken.ensureToken, purchaseController.deletePurchase);

}
