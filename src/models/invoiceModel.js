'use strict'
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'DespairDB'
});

let invoice = {};

invoice.listInvoices = (callback) => {
  if(connection){
    connection.query(
      `SELECT * FROM Invoices ORDER BY InvoiceID`,
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

invoice.createInvoice = (invoiceData, callback) => {
  if(connection){
    connection.query(
      `INSERT INTO Invoices SET ?`, invoiceData,
      (error, data) => {
        if(error){
          throw error;
        } else {
          callback(null, {msg: 'Created invoice'});
        }
      }
    )
  } else {
    callback(null, {msg: 'Error connection'});
  }
};

invoice.updateInvoice = (invoiceData, callback) => {
  if(connection){
    const updateData = `
      UPDATE Invoices SET

      InvoiceID = ${connection.escape(invoiceData.Description)},
      InvoiceDate = ${connection.escape(invoiceData.Description)},
      ClientName = ${connection.escape(invoiceData.Description)},
      ClientLastName = ${connection.escape(invoiceData.Description)},
      ClientNIT = ${connection.escape(invoiceData.Description)},
      Total = ${connection.escape(invoiceData.Description)},
      BusinessID = ${connection.escape(invoiceData.Description)},

      Description = ${connection.escape(invoiceData.Description)},
      Total = ${connection.escape(invoiceData.Total)},
      Date = ${connection.escape(invoiceData.Date)},
      BusinessID = ${connection.escape(invoiceData.BusinessID)},
      WHERE InvoiceID =  = ${connection.escape(invoiceData.InvoiceID)}
    `;
    connection.query(updateData, (error, data) => {
      if(error){
        throw error;
      } else {
        callback(null, {msg: 'Updated invoice'});
      }
    });
  } else {
    callback(null, {msg: 'Error connection'});
  }
};

invoice.deleteinvoice = (InvoiceID, callback) => {
  if(connection){
    const deleteData = `
      DELETE FROM Invoices WHERE InvoiceID = ${connection.escape(InvoiceID)}
    `;
    connection.query(deleteData, (error, data) => {
      if(error){
        throw error;
      } else {
        callback(null, {msg: 'Deleted invoice'})
      }
    })
  } else {
    callback(null, {msg: 'Error connection'});
  }
};

module.exports = invoice;
