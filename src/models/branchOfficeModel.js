'use strict'
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'DespairDB'
});

let BranchOffice = {};

BranchOffice.listBranchOffices = (callback) => {
  if(connection){
    connection.query(
      `SELECT * FROM BranchOffices ORDER BY BranchOfficeID`,
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

BranchOffice.createBranchOffice = (BranchOfficeData, callback) => {
  if(connection){
    connection.query(
      `INSERT INTO BranchOffices SET ?`, BranchOfficeData,
      (error, data) => {
        if(error){
          throw error;
        } else {
          callback(null, {msg: 'Created BranchOffice'});
        }
      }
    )
  } else {
    callback(null, {msg: 'Error connection'});
  }
};

BranchOffice.updateBranchOffice = (BranchOfficeData, callback) => {
  if(connection){
    const updateData = `
      UPDATE BranchOffices SET
      BranchOfficeName = ${connection.escape(BranchOfficeData.BranchOfficeName)},
      BranchOfficeAddress = ${connection.escape(BranchOfficeData.BranchOfficeAddress)},
      BranchOfficePhone = ${connection.escape(BranchOfficeData.BranchOfficePhone)}
      WHERE BranchOfficeID = ${connection.escape(BranchOfficeData.BranchOfficeID)}
    `;
    connection.query(updateData, (error, data) => {
      if(error){
        throw error;
      } else {
        callback(null, {msg: 'Updated BranchOffice'});
      }
    });
  } else {
    callback(null, {msg: 'Error connection'});
  }
};

BranchOffice.deleteBranchOffice = (BranchOfficeID, callback) => {
  if(connection){
    const deleteData = `
      DELETE FROM BranchOffices WHERE BranchOfficeID = ${connection.escape(BranchOfficeID)}
    `;

    connection.query(deleteData, (error, data) => {
      if(error){
        throw error;
      } else {
        callback(null, {msg: 'Deleted BranchOffice'})
      }
    })
  } else {
    callback(null, {msg: 'Error connection'});
  }
};

module.exports = BranchOffice;
