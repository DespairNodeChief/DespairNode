const express = require('express');
var providerController = require('../controllers/providerController');
var ensureToken = require('../middlewares/ensureToken');

module.exports = function (app){

  app.get('/provider/listProviders', ensureToken.ensureToken, providerController.listProviders);
  app.post('/provider/createProvider', ensureToken.ensureToken, providerController.createProvider);
  app.put('/provider/updateProvider/:ProviderID', ensureToken.ensureToken, providerController.updateProvider);
  app.delete('/provider/deleteProvider/:ProviderID', ensureToken.ensureToken, providerController.deleteProvider);

}
