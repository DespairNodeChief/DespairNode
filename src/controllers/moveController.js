const moveModel = require('../models/moveModel');

function listMoves(req, res){
  moveModel.listMoves((error, data) => {
    res.status(200).json(data);
  })
}

function createMove(req, res){
  const moveData = {
    MoveID: null,
    Description: req.body.Description,
    Total: req.body.Total,
    Date: req.body.Date,
    BusinessID: req.body.BusinessID
  }

  moveModel.createMove(moveData, (error, data) => {
    if(data){
      res.status(200).json(data)
    } else {
      res.status(500).json({msg: 'Error'})
    }
  })
}

function updateMove(req, res){
  const moveData = {
    MoveID: req.params.MoveID,
    Description: req.body.Description,
    Total: req.body.Total,
    Date: req.body.Date,
    BusinessID: req.body.BusinessID
  }

  moveModel.updateMove(moveData, (err, data) => {
    if(data && data.msg){
      res.status(200).json(data);
    } else  {
      res.status(500).json({msg: 'Error'})
    }
  })
}

function deleteMove(req, res){
  moveModel.deleteMove(req.params.MoveID, (error, data) => {
    if(data && data.msg){
      res.status(200).json(data);
    } else {
      res.status(500).json({msg: 'Error'})
    }
  })
}

module.exports = {
    listMoves,
    createMove,
    updateMove,
    deleteMove
}
