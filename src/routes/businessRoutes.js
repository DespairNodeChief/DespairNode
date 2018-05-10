const express = require('express');
var businessController = require('../controllers/businessController');
var ensureToken = require('../middlewares/ensureToken');

module.exports = function (app){

  app.get('/business/listBusiness', ensureToken.ensureToken, businessController.listBusiness);
  app.post('/business/createBusiness', ensureToken.ensureToken, businessController.createBusiness);
  app.put('/business/updateBusiness/:BusinessID', ensureToken.ensureToken, businessController.updateBusiness);
  app.delete('/business/deleteBusiness/:BusinessID', ensureToken.ensureToken, businessController.deleteBusiness);

}
