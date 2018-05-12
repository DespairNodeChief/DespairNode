'use strict'
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'DespairDB'
});

let purchase = {};

purchase.listPurchases = (callback) => {
  if(connection){
    connection.query(
      `SELECT * FROM Purchases ORDER BY PurchaseID`,
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

purchase.createPurchase = (purchaseData, callback) => {
  if(connection){
    connection.query(
      `INSERT INTO Purchases SET ?`, purchaseData,
      (error, data) => {
        if(error){
          throw error;
        } else {
          callback(null, {msg: 'Created purchase'});
        }
      }
    )
  } else {
    callback(null, {msg: 'Error connection'});
  }
};

purchase.updatepurchase = (purchaseData, callback) => {
  if(connection){
    const updateData = `
      UPDATE Purchases SET
      Date = ${connection.escape(purchaseData.Date)},
      Total = ${connection.escape(purchaseData.Total)},
      ProviderID = ${connection.escape(purchaseData.ProviderID)},
      BusinessID = ${connection.escape(purchaseData.BusinessID)},
      WHERE PurchaseID =  = ${connection.escape(purchaseData.PurchaseID)}
    `;
    connection.query(updateData, (error, data) => {
      if(error){
        throw error;
      } else {
        callback(null, {msg: 'Updated purchase'});
      }
    });
  } else {
    callback(null, {msg: 'Error connection'});
  }
};

purchase.deletePurchase = (PurchaseID, callback) => {
  if(connection){
    const deleteData = `
      DELETE FROM Purchases WHERE PurchaseID = ${connection.escape(PurchaseID)}
    `;
    connection.query(deleteData, (error, data) => {
      if(error){
        throw error;
      } else {
        callback(null, {msg: 'Deleted purchase'})
      }
    })
  } else {
    callback(null, {msg: 'Error connection'});
  }
};

module.exports = purchase;
