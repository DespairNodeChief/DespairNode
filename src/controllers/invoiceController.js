const invoiceModel = require('../models/invoiceModel');

function listInvoices(req, res){
  invoiceModel.listInvoices((error, data) => {
    res.status(200).json(data);
  })
}

function createInvoice(req, res){
  const invoiceData = {
    InvoiceID: null,
    InvoiceDate: req.body.InvoiceDate,
    ClientName: req.body.ClientName,
    ClientLastName: req.body.ClientLastName,
    ClientNIT: req.body.ClientNIT,
    Total: req.body.Total,
    BusinessID: req.body.BusinessID
  }

  invoiceModel.createInvoice(invoiceData, (error, data) => {
    if(data){
      res.status(200).json(data)
    } else {
      res.status(500).json({msg: 'Error'})
    }
  })
}

function updateInvoice(req, res){
  const invoiceData = {
    InvoiceID: req.param.InvoiceID,
    InvoiceDate: req.body.InvoiceDate,
    ClientName: req.body.ClientName,
    ClientLastName: req.body.ClientLastName,
    ClientNIT: req.body.ClientNIT,
    Total: req.body.Total,
    BusinessID: req.body.BusinessID
  }

  invoiceData.updateInvoice(invoiceData, (err, data) => {
    if(data && data.msg){
      res.status(200).json(data);
    } else  {
      res.status(500).json({msg: 'Error'})
    }
  })
}

function deleteInvoice(req, res){
  invoiceModel.deleteInvoice(req.params.InvoiceID, (error, data) => {
    if(data && data.msg){
      res.status(200).json(data);
    } else {
      res.status(500).json({msg: 'Error'})
    }
  })
}

module.exports = {
    listInvoices,
    createInvoice,
    updateInvoice,
    deleteInvoice
}
