const branchOfficeModel = require('../models/branchOfficeModel');

function listBranchOffices(req, res){
  branchOfficeModel.listBranchOffices((error, data) => {
    res.status(200).json(data);
  })
}

function createBranchOffice(req, res){
  const branchOfficeData = {
    BranchOfficeID: null,
    BranchOfficeName: req.body.BranchOfficeName,
    BranchOfficeAddress: req.body.BranchOfficeAddress,
    BranchOfficePhone: req.body.BranchOfficePhone,
    BusinessID: req.body.BusinessID
  }

  branchOfficeModel.createBranchOffice(branchOfficeData, (error, data) => {
    if(data){
      res.status(200).json(data)
    } else {
      res.status(500).json({msg: 'Error'})
    }
  })
}

function updateBranchOffice(req, res){
  const branchOfficeData = {
    BranchOfficeID: req.body.params.BranchOfficeID,
    BranchOfficeName: req.body.BranchOfficeName,
    BranchOfficeAddress: req.body.BranchOfficeAddress,
    BranchOfficePhone: req.body.BranchOfficePhone,
    BusinessID: req.body.BusinessID
  }

  branchOfficeModel.updateBranchOffice(branchOfficeData, (err, data) => {
    if(data && data.msg){
      res.status(200).json(data);
    } else  {
      res.status(500).json({msg: 'Error'})
    }
  })
}

function deleteBranchOffice(req, res){
  branchOfficeModel.deleteBranchOffice(req.params.BranchOfficeID, (error, data) => {
    if(data && data.msg){
      res.status(200).json(data);
    } else {
      res.status(500).json({msg: 'Error'})
    }
  })
}

module.exports = {
    listBranchOffices,
    createBranchOffice,
    updateBranchOffice,
    deleteBranchOffice
}
