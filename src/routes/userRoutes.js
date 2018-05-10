const express = require('express');
var userController = require('../controllers/userController');
var authenticateUser = require('../middlewares/authenticateUser');
var ensureToken = require('../middlewares/ensureToken');


module.exports = function (app){

  app.get('/user/listUsers', userController.listUsers);
  app.post('/user/loginUser', authenticateUser.authenticateUser);
  app.post('/user/createUser', userController.createUser);
  app.put('/user/updateUser/:UserID', ensureToken.ensureToken, userController.updateUser);
  app.delete('/user/deleteUser/:UserID', ensureToken.ensureToken, userController.deleteUser);

}
