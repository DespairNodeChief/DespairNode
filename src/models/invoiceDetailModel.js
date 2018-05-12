'use strict'
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'DespairDB'
});

let invoiceDetail = {};

invoiceDetail.listInvoiceDetails = (callback) => {
  if(connection){
    connection.query(
      `SELECT * FROM invoiceDetails ORDER BY invoiceDetailID`,
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

invoiceDetail.createInvoiceDetail = (invoiceDetailData, callback) => {
  if(connection){
    connection.query(
      `INSERT INTO invoiceDetails SET ?`, invoiceDetailData,
      (error, data) => {
        if(error){
          throw error;
        } else {
          callback(null, {msg: 'Created invoiceDetail'});
        }
      }
    )
  } else {
    callback(null, {msg: 'Error connection'});
  }
};

invoiceDetail.updateInvoiceDetail = (invoiceDetailData, callback) => {
  if(connection){
    const updateData = `
      UPDATE invoiceDetails SET
      InvoiceDetailID = ${connection.escape(invoiceDetailData.InvoiceDetailID)},
      Quantity = ${connection.escape(invoiceDetailData.Quantity)},
      Discount = ${connection.escape(invoiceDetailData.Discount)},
      SubTotal = ${connection.escape(invoiceDetailData.SubTotal)},
      BranchOfficeInventaryID = ${connection.escape(invoiceDetailData.BranchOfficeInventaryID)},
      BusinessID = ${connection.escape(invoiceDetailData.BusinessID)},
      InvoiceID = ${connection.escape(invoiceDetailData.InvoiceID)}
    `;
    connection.query(updateData, (error, data) => {
      if(error){
        throw error;
      } else {
        callback(null, {msg: 'Updated invoiceDetail'});
      }
    });
  } else {
    callback(null, {msg: 'Error connection'});
  }
};

invoiceDetail.deleteInvoiceDetail = (invoiceDetailID, callback) => {
  if(connection){
    const deleteData = `
      DELETE FROM invoiceDetails WHERE invoiceDetailID = ${connection.escape(invoiceDetailID)}
    `;

    connection.query(deleteData, (error, data) => {
      if(error){
        throw error;
      } else {
        callback(null, {msg: 'Deleted invoiceDetail'})
      }
    })
  } else {
    callback(null, {msg: 'Error connection'});
  }
};

module.exports = invoiceDetail;
