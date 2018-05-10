'use strict'
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'DespairDB'
});

let branchOfficeInventary = {};

branchOfficeInventary.listBranchOfficeInventary = (callback) => {
  if(connection){
    connection.query(
      `SELECT * FROM BranchOfficeInventary ORDER BY BranchOfficeInventaryID`,
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

branchOfficeInventary.createBranchOfficeInventary = (branchOfficeInventaryData, callback) => {
  if(connection){
    connection.query(
      `INSERT INTO BranchOfficeInventary SET ?`, branchOfficeInventaryData,
      (error, data) => {
        if(error){
          throw error;
        } else {
          callback(null, {msg: 'Created branchOfficeInventary'});
        }
      }
    )
  } else {
    callback(null, {msg: 'Error connection'});
  }
};

branchOfficeInventary.updateBranchOfficeInventary = (branchOfficeData, callback) => {
  if(connection){
    const updateData = `
      UPDATE BranchOfficeInventary SET
      Description = ${connection.escape(branchOfficeInventaryData.Description)},
      Quantity = ${connection.escape(branchOfficeInventaryData.Quantity)},
      Price = ${connection.escape(branchOfficeData.Price)},
      CodeBar = ${connection.escape(branchOfficeInventaryData.CodeBar)},
      BusinessID = ${connection.escape(branchOfficeInventaryData.BusinessID)},
      InventaryID = ${connection.escape(branchOfficeInventaryData.InventaryID)},
      BranchOfficeID = ${connection.escape(branchOfficeInventaryData.BranchOfficeID)}
    `;
    connection.query(updateData, (error, data) => {
      if(error){
        throw error;
      } else {
        callback(null, {msg: 'Updated branchOfficeInventary'});
      }
    });
  } else {
    callback(null, {msg: 'Error connection'});
  }
};

branchOfficeInventary.deleteBranchOfficeInventary = (branchOfficeInventaryID, callback) => {
  if(connection){
    const deleteData = `
      DELETE FROM BranchOfficeInventary WHERE BranchOfficeInventaryID = ${connection.escape(BranchOfficeInventaryID)}
    `;

    connection.query(deleteData, (error, data) => {
      if(error){
        throw error;
      } else {
        callback(null, {msg: 'Deleted branchOfficeInventary'})
      }
    })
  } else {
    callback(null, {msg: 'Error connection'});
  }
};

module.exports = branchOfficeInventary;
