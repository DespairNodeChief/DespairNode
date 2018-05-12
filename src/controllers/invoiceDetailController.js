const invoiceDetailModel = require('../models/invoiceDetailModel');

function listInvoiceDetails(req, res){
  invoiceDetailModel.listInvoiceDetails((error, data) => {
    res.status(200).json(data);
  })
}

function createInvoiceDetail(req, res){
  const invoiceDetailData = {
    InvoiceDetailID: null,
    Quantity: req.body.Quantity,
    Discount: req.body.Discount,
    SubTotal: req.body.SubTotal,
    BranchOfficeInventaryID: req.body.BranchOfficeInventaryID,
    BusinessID: req.body.BusinessID,
    InvoiceID: req.body.InvoiceID
  }

  invoiceDetailModel.createInvoiceDetail(invoiceDetailData, (error, data) => {
    if(data){
      res.status(200).json(data)
    } else {
      res.status(500).json({msg: 'Error'})
    }
  })
}

function updateInvoiceDetail(req, res){
  const invoiceDetailData = {
    InvoiceDetailID: req.params.InvoiceDetailID,
    Quantity: req.body.Quantity,
    Discount: req.body.Discount,
    SubTotal: req.body.SubTotal,
    BranchOfficeInventaryID: req.body.BranchOfficeInventaryID,
    BusinessID: req.body.BusinessID,
    InvoiceID: req.body.InvoiceID
  }

  invoiceDetailModel.updateInvoiceDetail(invoiceDetailData, (err, data) => {
    if(data && data.msg){
      res.status(200).json(data);
    } else  {
      res.status(500).json({msg: 'Error'})
    }
  })
}

function deleteInvoiceDetail(req, res){
  invoiceDetailModel.deleteInvoiceDetail(req.params.InvoiceDetailID, (error, data) => {
    if(data && data.msg){
      res.status(200).json(data);
    } else {
      res.status(500).json({msg: 'Error'})
    }
  })
}

module.exports = {
    listInvoiceDetails,
    createInvoiceDetail,
    updateInvoiceDetail,
    deleteInvoiceDetail
}
