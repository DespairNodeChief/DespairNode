'use strict'
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'DespairDB'
});

let user = {};

user.listUsers = (callback) => {
  if(connection){
    connection.query(
      `SELECT * FROM Users ORDER BY UserID`,
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

user.createUser = (userData, callback) => {
  if(connection){
    connection.query(
      `INSERT INTO Users SET ?`, userData,
      (error, data) => {
        if(error){
          throw error;
        } else {
          callback(null, {msg: 'Created user'});
        }
      }
    )
  } else {
    callback(null, {msg: 'Error connection'});
  }
};

user.updateUser = (userData, callback) => {
  if(connection){
    const updateData = `
      UPDATE Users SET
      UserName = ${connection.escape(userData.UserName)},
      UserNickName = ${connection.escape(userData.UserNickName)},
      UserEmail = ${connection.escape(userData.UserEmail)},
      UserPassword = ${connection.escape(userData.UserPassword)}
      WHERE UserID = ${connection.escape(userData.UserID)}
    `;
    connection.query(updateData, (error, data) => {
      if(error){
        throw error;
      } else {
        callback(null, {msg: 'Updated user'});
      }
    });
  } else {
    callback(null, {msg: 'Error connection'});
  }
};

user.deleteUser = (UserID, callback) => {
  if(connection){
    const deleteData = `
      DELETE FROM Users WHERE UserID = ${connection.escape(UserID)}
    `;

    connection.query(deleteData, (error, data) => {
      if(error){
        throw error;
      } else {
        callback(null, {msg: 'Deleted user'})
      }
    })
  } else {
    callback(null, {msg: 'Error connection'});
  }
};

module.exports = user;
