const express = require('express');
var categoryController = require('../controllers/categoryController');
var ensureToken = require('../middlewares/ensureToken');

module.exports = function (app){

  app.get('/category/listCategories', ensureToken.ensureToken, categoryController.listCategories);
  app.post('/category/createCategory', ensureToken.ensureToken, categoryController.createCategory);
  app.put('/category/updateCategory/:CategoryID', ensureToken.ensureToken, categoryController.updateCategory);
  app.delete('/category/deleteCategory/:CategoryID', ensureToken.ensureToken, categoryController.deleteCategory);

}
