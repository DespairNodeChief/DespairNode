'use strict'
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'DespairDB'
});

let employee = {};

employee.listEmployees = (callback) => {
  if(connection){
    connection.query(
      `SELECT * FROM Employees ORDER BY EmployeeID`,
      (error, data) => {
        if(error){
          throw error;
        } else {
          callback(null, data);
        }
      }
    )
  } else {
    callback(null, {msg: 'Error connection'});
  }
};

employee.createEmployee = (employeeData, callback) => {
  if(connection){
    connection.query(
      `INSERT INTO Employees SET ?`, employeeData,
      (error, data) => {
        if(error){
          throw error;
        } else {
          callback(null, {msg: 'Created employee'});
        }
      }
    )
  } else {
    callback(null, {msg: 'Error connection'});
  }
};

employee.updateEmployee = (employeeData, callback) => {
  if(connection){
    const updateData = `
      UPDATE Employees SET
      EmployeeName = ${connection.escape(employeeData.EmployeeName)},
      EmployeePhone = ${connection.escape(employeeData.EmployeePhone)},
      EmployeeAddress = ${connection.escape(employeeData.EmployeeAddress)},
      EmployeeEmail = ${connection.escape(employeeData.EmployeeEmail)},
      EmployeeAge = ${connection.escape(employeeData.EmployeeAge)},
      EmployeeSalary = ${connection.escape(employeeData.EmployeeSalary)},
      EmployeeContratation = ${connection.escape(employeeData.EmployeeContratation)},
      EmployeeRol = ${connection.escape(employeeData.EmployeeRol)},
      EmployeeImage = ${connection.escape(employeeData.EmployeeImage)},
      EmployeeUser = ${connection.escape(employeeData.EmployeeUser)},
      EmployeePassword = ${connection.escape(employeeData.EmployeePassword)},
      BranchOfficeID = ${connection.escape(employeeData.BranchOfficeID)},
      BusinessID = ${connection.escape(employeeData.BusinessID)}
      WHERE EmployeeID = ${connection.escape(employeeData.EmployeeID)}
    `;
    connection.query(updateData, (error, data) => {
      if(error){
        throw error;
      } else {
        callback(null, {msg: 'Updated employee'});
      }
    });
  } else {
    callback(null, {msg: 'Error connection'});
  }
};

employee.deleteEmployee = (EmployeeID, callback) => {
  if(connection){
    const deleteData = `
      DELETE FROM Employees WHERE EmployeeID = ${connection.escape(EmployeeID)}
    `;

    connection.query(deleteData, (error, data) => {
      if(error){
        throw error;
      } else {
        callback(null, {msg: 'Deleted employee'})
      }
    })
  } else {
    callback(null, {msg: 'Error connection'});
  }
};

module.exports = employee;
