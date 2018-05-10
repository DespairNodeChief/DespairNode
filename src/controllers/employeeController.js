const employeeModel = require('../models/employeeModel');

function listEmployees(req, res){
  employeeModel.listEmployees((error, data) => {
    res.status(200).json(data);
  })
}

function createEmployee(req, res){
  const employeeData = {
    EmployeeID: null,
    EmployeeName: req.body.EmployeeName,
    EmployeePhone: req.body.EmployeePhone,
    EmployeeAddress: req.body.EmployeeAddress,
    EmployeeEmail: req.body.EmployeeEmail,
    EmployeeAge: req.body.EmployeeAge,
    EmployeeSalary: req.body.EmployeeSalary,
    EmployeeContratation: req.body.EmployeeContratation,
    EmployeeRol: req.body.EmployeeRol,
    EmployeeImage: req.body.EmployeeImage,
    EmployeeUser: req.body.EmployeeUser,
    EmployeePassword: req.body.EmployeePassword,
    BranchOfficeID: req.body.BranchOfficeID,
    BusinessID: req.body.BusinessID
  }

  employeeModel.createEmployee(employeeData, (error, data) => {
    if(data){
      res.status(200).json(data)
    } else {
      res.status(500).json({msg: 'Error'})
    }
  })
}

function updateEmployee(req, res){
  const employeeData = {
    EmployeeID: req.params.EmployeeID,
    EmployeeName: req.body.EmployeeName,
    EmployeePhone: req.body.EmployeePhone,
    EmployeeAddress: req.body.EmployeeAddress,
    EmployeeEmail: req.body.EmployeeEmail,
    EmployeeAge: req.body.EmployeeAge,
    EmployeeSalary: req.body.EmployeeSalary,
    EmployeeContratation: req.body.EmployeeContratation,
    EmployeeRol: req.body.EmployeeRol,
    EmployeeImage: req.body.EmployeeImage,
    EmployeeUser: req.body.EmployeeUser,
    EmployeePassword: req.body.EmployeePassword,
    BranchOfficeID: req.body.BranchOfficeID,
    BusinessID: req.body.BusinessID
  }

  employeeModel.updateEmployee(employeeData, (err, data) => {
    if(data && data.msg){
      res.status(200).json(data);
    } else  {
      res.status(500).json({msg: 'Error'})
    }
  })
}

function deleteEmployee(req, res){
  employeeModel.deleteEmployee(req.params.EmployeeID, (error, data) => {
    if(data && data.msg){
      res.status(200).json(data);
    } else {
      res.status(500).json({msg: 'Error'})
    }
  })
}

module.exports = {
    listEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee
}
