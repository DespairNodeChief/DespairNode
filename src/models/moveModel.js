'use strict'
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'DespairDB'
});

let move = {};

move.listMoves = (callback) => {
  if(connection){
    connection.query(
      `SELECT * FROM Moves ORDER BY MoveID`,
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

move.createMove = (moveData, callback) => {
  if(connection){
    connection.query(
      `INSERT INTO Moves SET ?`, moveData,
      (error, data) => {
        if(error){
          throw error;
        } else {
          callback(null, {msg: 'Created move'});
        }
      }
    )
  } else {
    callback(null, {msg: 'Error connection'});
  }
};

move.updateMove = (moveData, callback) => {
  if(connection){
    const updateData = `
      UPDATE Moves SET
      Description = ${connection.escape(moveData.Description)},
      Total = ${connection.escape(moveData.Total)},
      Date = ${connection.escape(moveData.Date)},
      BusinessID = ${connection.escape(moveData.BusinessID)},
      WHERE MoveID =  = ${connection.escape(moveData.MoveID)}
    `;
    connection.query(updateData, (error, data) => {
      if(error){
        throw error;
      } else {
        callback(null, {msg: 'Updated move'});
      }
    });
  } else {
    callback(null, {msg: 'Error connection'});
  }
};

move.deleteMOve = (MoveID, callback) => {
  if(connection){
    const deleteData = `
      DELETE FROM Moves WHERE MoveID = ${connection.escape(MoveID)}
    `;
    connection.query(deleteData, (error, data) => {
      if(error){
        throw error;
      } else {
        callback(null, {msg: 'Deleted move'})
      }
    })
  } else {
    callback(null, {msg: 'Error connection'});
  }
};

module.exports = move;
