const providerModel = require('../models/providerModel');

function listProviders(req, res){
  providerModel.listProviders((error, data) => {
    res.status(200).json(data);
  })
}

function createProvider(req, res){
  const providerData = {
    ProviderID: null,
    ProviderName: req.body.ProviderName,
    ProviderAddress: req.body.ProviderAddress,
    ProviderPhone: req.body.ProviderPhone,
    ProviderEmail: req.body.ProviderEmail,
    BusinessID: req.body.BusinessID
  }

  providerModel.createProvider(providerData, (error, data) => {
    if(data && data.insertID){
      res.status(200).json(data)
    } else {
      res.status(500).json({msg: 'Error'})
    }
  })
}

function updateProvider(req, res){
  const providerData = {
    ProviderID: req.params.ProviderID,
    ProviderName: req.body.ProviderName,
    ProviderAddress: req.body.ProviderAddress,
    ProviderPhone: req.body.ProviderPhone,
    ProviderEmail: req.body.ProviderEmail,
    BusinessID: req.params.BusinessID
  }

  providerModel.updateProvider(providerData, (err, data) => {
    if(data && data.msg){
      res.status(200).json(data);
    } else  {
      res.status(500).json({msg: 'Error'})
    }
  })
}

function deleteProvider(req, res){
  providerModel.deleteProvider(req.params.ProviderID, (error, data) => {
    if(data && data.msg){
      res.status(200).json(data);
    } else {
      res.status(500).json({msg: 'Error'})
    }
  })
}

module.exports = {
    listProviders,
    createProvider,
    updateProvider,
    deleteProvider
}
