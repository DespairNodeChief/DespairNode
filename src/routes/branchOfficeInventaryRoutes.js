const express = require('express');
var branchOfficeInventaryController = require('../controllers/branchOfficeInventaryController');
var ensureToken = require('../middlewares/ensureToken');

module.exports = function (app){

  app.get('/branchOfficeInventary/listBranchOfficeInventary', ensureToken.ensureToken, branchOfficeInventaryController.listBranchOfficeInventary);
  app.post('/branchOfficeInventary/createBranchOfficeInventary', ensureToken.ensureToken, branchOfficeInventaryController.createBranchOfficeInventary);
  app.put('/branchOfficeInventary/updateBranchOfficeInventary/:BranchOfficeInventaryID', ensureToken.ensureToken, branchOfficeInventaryController.updateBranchOfficeInventary);
  app.delete('/branchOfficeInventary/deleteBranchOfficeInventary/:BranchOfficeInventaryID', ensureToken.ensureToken, branchOfficeInventaryController.deleteBranchOfficeInventary);

}
