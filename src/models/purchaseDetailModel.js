'use strict'
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'DespairDB'
});

let purchaseDetail = {};

purchaseDetail.listPurchaseDetails = (callback) => {
  if(connection){
    connection.query(
      `SELECT * FROM PurchaseDetails ORDER BY purchaseDetailID`,
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

purchaseDetail.createPurchaseDetail = (purchaseDetailData, callback) => {
  if(connection){
    connection.query(
      `INSERT INTO PurchaseDetails SET ?`, purchaseDetailData,
      (error, data) => {
        if(error){
          throw error;
        } else {
          callback(null, {msg: 'Created purchaseDetail'});
        }
      }
    )
  } else {
    callback(null, {msg: 'Error connection'});
  }
};

purchaseDetail.updatePurchaseDetail = (purchaseDetailData, callback) => {
  if(connection){
    const updateData = `
      UPDATE PurchaseDetails SET
      BusinessID = ${connection.escape(purchaseDetailData.BusinessID)},
      PurchaseID = ${connection.escape(purchaseDetailData.PurchaseID)},
      Description = ${connection.escape(purchaseDetailData.Description)},
      Price = ${connection.escape(purchaseDetailData.Price)},
      Quantity = ${connection.escape(purchaseDetailData.Quantity)},
      Total = ${connection.escape(purchaseDetailData.Total)}
      WHERE purchaseDetailID =  = ${connection.escape(purchaseDetailData.purchaseDetailID)}
    `;
    connection.query(updateData, (error, data) => {
      if(error){
        throw error;
      } else {
        callback(null, {msg: 'Updated purchaseDetail'});
      }
    });
  } else {
    callback(null, {msg: 'Error connection'});
  }
};

purchaseDetail.deletePurchaseDetail = (purchaseDetailID, callback) => {
  if(connection){
    const deleteData = `
      DELETE FROM PurchaseDetails WHERE purchaseDetailID = ${connection.escape(purchaseDetailID)}
    `;
    connection.query(deleteData, (error, data) => {
      if(error){
        throw error;
      } else {
        callback(null, {msg: 'Deleted purchaseDetail'})
      }
    })
  } else {
    callback(null, {msg: 'Error connection'});
  }
};

module.exports = purchaseDetail;
