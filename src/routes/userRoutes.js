const express = require('express');
var userController = require('../controllers/userController');


module.exports = function (app){

  app.get('/user/listUsers', userController.listUsers);

  app.post('/user/createUser', userController.createUser);
  app.put('/user/updateUser/:UserID', userController.updateUser);
  app.delete('/user/deleteUser/:UserID', userController.deleteUser);

}
