'use strict'
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'DespairDB'
});

let business = {};

business.listBusiness = (callback) => {
  if(connection){
    connection.query(
      `SELECT * FROM Business ORDER BY BusinessID`,
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

business.createBusiness = (businessData, callback) => {
  if(connection){
    connection.query(
      `INSERT INTO Business SET ?`, businessData,
      (error, data) => {
        if(error){
          throw error;
        } else {
          callback(null, {msg: 'Created business', insertID: data.insertID});
        }
      }
    )
  } else {
    callback(null, {msg: 'Error connection'});
  }
};

business.updateBusiness = (businessData, callback) => {
  if(connection){
    const updateData = `
      UPDATE Business SET
      BusinessName = ${connection.escape(businessData.BusinessName)},
      BusinessCountry = ${connection.escape(businessData.BusinessCountry)},
      BusinessLogo = ${connection.escape(businessData.BusinessLogo)}
      WHERE BusinessID = ${connection.escape(businessData.BusinessID)}
    `;
    connection.query(updateData, (error, data) => {
      if(error){
        throw error;
      } else {
        callback(null, {msg: 'Updated business'});
      }
    });
  } else {
    callback(null, {msg: 'Error connection'});
  }
};

business.deletebusiness = (BusinessID, callback) => {
  if(connection){
    const deleteData = `
      DELETE FROM Business WHERE BusinessID = ${connection.escape(BusinessID)}
    `;
    connection.query(deleteData, (error, data) => {
      if(error){
        throw error;
      } else {
        callback(null, {msg: 'Deleted business'})
      }
    })
  } else {
    callback(null, {msg: 'Error connection'});
  }
};

module.exports = business;
