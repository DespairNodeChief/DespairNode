const express = require('express');
var branchOfficeController = require('../controllers/branchOfficeController');
var ensureToken = require('../middlewares/ensureToken');

module.exports = function (app){

  app.get('/branchOffice/listBranchOffices', ensureToken.ensureToken, branchOfficeController.listBranchOffices);
  app.post('/branchOffice/createBranchOffice', ensureToken.ensureToken, branchOfficeController.createBranchOffice);
  app.put('/branchOffice/updateBranchOffice/:BranchOfficeID', ensureToken.ensureToken, branchOfficeController.updateBranchOffice);
  app.delete('/branchOffice/deleteBranchOffice/:BranchOfficeID', ensureToken.ensureToken, branchOfficeController.deleteBranchOffice);

}
