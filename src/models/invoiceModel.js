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
      InvoiceDate = ${connection.escape(invoiceData.InvoiceDate)},
      ClientName = ${connection.escape(invoiceData.ClientName)},
      ClientLastName = ${connection.escape(invoiceData.ClientLastName)},
      ClientNIT = ${connection.escape(invoiceData.ClientNIT)},
      Total = ${connection.escape(invoiceData.Total)},
      BusinessID = ${connection.escape(invoiceData.BusinessID)}
      WHERE InvoiceID = ${connection.escape(invoiceData.InvoiceID)}
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

invoice.deleteInvoice = (InvoiceID, callback) => {
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
