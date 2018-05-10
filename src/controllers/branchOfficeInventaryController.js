const branchOfficeInventaryModel = require('../models/branchOfficeInventaryModel');

function listBranchOfficeInventary(req, res){
  branchOfficeInventaryModel.listBranchOfficeInventary((error, data) => {
    res.status(200).json(data);
  })
}

function createBranchOfficeInventary(req, res){
  const branchOfficeInventaryData = {
    BranchOfficeInventaryID: null,
    Description: req.body.Description,
    Quantity: req.body.Quantity,
    Price: req.body.Price,
    CodeBar: req.body.CodeBar,
    BusinessID: req.body.BusinessID,
    InventaryID: req.body.InventaryID,
    BranchOfficeID: req.body.BranchOfficeID
  }

  branchOfficeInventaryModel.createBranchOfficeInventary(branchOfficeInventaryData, (error, data) => {
    if(data){
      res.status(200).json(data)
    } else {
      res.status(500).json({msg: 'Error'})
    }
  })
}

function updateBranchOfficeInventary(req, res){
  const branchOfficeInventaryData = {
    BranchOfficeInventaryID: req.body.params.BranchOfficeInventaryID,
    Description: req.body.Description,
    Quantity: req.body.Quantity,
    Price: req.body.Price,
    CodeBar: req.body.CodeBar,
    BusinessID: req.body.BusinessID,
    InventaryID: req.body.InventaryID,
    BranchOfficeID: req.body.BranchOfficeID
  }

  branchOfficeInventaryModel.updateBranchOfficeInventary(branchOfficeInventaryData, (err, data) => {
    if(data && data.msg){
      res.status(200).json(data);
    } else  {
      res.status(500).json({msg: 'Error'})
    }
  })
}

function deleteBranchOfficeInventary(req, res){
  branchOfficeInventaryModel.deleteBranchOfficeInventary(req.params.BranchOfficeInventaryID, (error, data) => {
    if(data && data.msg){
      res.status(200).json(data);
    } else {
      res.status(500).json({msg: 'Error'})
    }
  })
}

module.exports = {
    listBranchOfficeInventary,
    createBranchOfficeInventary,
    updateBranchOfficeInventary,
    deleteBranchOfficeInventary
}
