const purchaseModel = require('../models/purchaseModel');

function listPurchases(req, res){
  purchaseModel.listPurchases((error, data) => {
    res.status(200).json(data);
  })
}

function createPurchase(req, res){
  const purchaseData = {
    PurchaseID: null,
    Date: req.body.Date,
    Total: req.body.Total,
    ProviderID: req.body.ProviderID,
    BusinessID: req.body.BusinessID
  }

  purchaseModel.createPurchase(purchaseData, (error, data) => {
    if(data){
      res.status(200).json(data)
    } else {
      res.status(500).json({msg: 'Error'})
    }
  })
}

function updatePurchase(req, res){
  const purchaseData = {
    PurchaseID: req.params.PurchaseID,
    Date: req.body.Date,
    Total: req.body.Total,
    ProviderID: req.body.ProviderID,
    BusinessID: req.body.BusinessID
  }

  purchaseModel.updatePurchase(purchaseData, (err, data) => {
    if(data && data.msg){
      res.status(200).json(data);
    } else  {
      res.status(500).json({msg: 'Error'})
    }
  })
}

function deletePurchase(req, res){
  purchaseModel.deletePurchase(req.params.PurchaseID, (error, data) => {
    if(data && data.msg){
      res.status(200).json(data);
    } else {
      res.status(500).json({msg: 'Error'})
    }
  })
}

module.exports = {
    listPurchases,
    createPurchase,
    updatePurchase,
    deletePurchase
}
