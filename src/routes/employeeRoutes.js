const express = require('express');
var employeeController = require('../controllers/employeeController');
var authenticateEmployee = require('../middlewares/authenticateEmployee');
var ensureToken = require('../middlewares/ensureToken');

module.exports = function (app){

  app.get('/employee/listEmployees', ensureToken.ensureToken, employeeController.listEmployees);
  app.post('/employee/loginEmployee', authenticateEmployee.authenticateEmployee);
  app.post('/employee/createEmployee', ensureToken.ensureToken, employeeController.createEmployee);
  app.put('/employee/updateEmployee/:EmployeeID', ensureToken.ensureToken, employeeController.updateEmployee);
  app.delete('/employee/deleteEmployee/:EmployeeID', ensureToken.ensureToken, employeeController.deleteEmployee);

}
