const express = require('express');
var moveController = require('../controllers/moveController');
var ensureToken = require('../middlewares/ensureToken');

module.exports = function (app){

  app.get('/move/listMoves', ensureToken.ensureToken, moveController.listMoves);
  app.post('/move/createMove', ensureToken.ensureToken, moveController.createMove);
  app.put('/move/updateMove/:MoveID', ensureToken.ensureToken, moveController.updateMove);
  app.delete('/move/deleteMove/:MoveID', ensureToken.ensureToken, moveController.deleteMove);

}
