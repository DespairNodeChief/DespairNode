const express = require('express');
var inventaryController = require('../controllers/inventaryController');
var ensureToken = require('../middlewares/ensureToken');

module.exports = function (app){

  app.get('/inventary/listInventaries', ensureToken.ensureToken, inventaryController.listInventaries);
  app.post('/inventary/createInventary', ensureToken.ensureToken, inventaryController.createInventary);
  app.put('/inventary/updateInventary/:InventaryID', ensureToken.ensureToken, inventaryController.updateInventary);
  app.delete('/inventary/deleteInventary/:InventaryID', ensureToken.ensureToken, inventaryController.deleteInventary);

}
