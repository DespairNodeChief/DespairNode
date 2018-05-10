const userModel = require('../models/userModel');

function listUsers(req, res){
  userModel.listUsers((error, data) => {
    res.status(200).json(data);
  })
}

function createUser(req, res){
  const userData = {
    UserID: null,
    UserName: req.body.UserName,
    UserNickName: req.body.UserNickName,
    UserEmail: req.body.UserEmail,
    UserPassword: req.body.UserPassword
  }

  userModel.createUser(userData, (error, data) => {
    if(data){
      res.status(200).json(data)
    } else {
      res.status(500).json({msg: 'Error'})
    }
  })
}

function updateUser(req, res){
  const userData = {
    UserID: req.params.UserID,
    UserName: req.body.UserName,
    UserNickName: req.body.UserNickName,
    UserEmail: req.body.UserEmail,
    UserPassword: req.body.UserPassword
  }

  userModel.updateUser(userData, (err, data) => {
    if(data && data.msg){
      res.status(200).json(data);
    } else  {
      res.status(500).json({msg: 'Error'})
    }
  })
}

function deleteUser(req, res){
  userModel.deleteUser(req.params.UserID, (error, data) => {
    if(data && data.msg){
      res.status(200).json(data);
    } else {
      res.status(500).json({msg: 'Error'})
    }
  })
}

module.exports = {
    listUsers,
    createUser,
    updateUser,
    deleteUser
}
