const categoryModel = require('../models/categoryModel');

function listCategories(req, res){
  categoryModel.listCategories((error, data) => {
    res.status(200).json(data);
  })
}

function createCategory(req, res){
  const categoryData = {
    CategoryID: null,
    CategoryDescription: req.body.CategoryDescription,
    BusinessID: req.body.BusinessID
  }

  categoryModel.createCategory(categoryData, (error, data) => {
    if(data){
      res.status(200).json(data)
    } else {
      res.status(500).json({msg: 'Error'})
    }
  })
}

function updateCategory(req, res){
  const categoryData = {
    CategoryID: req.params.CategoryID,
    CategoryDescription: req.body.CategoryDescription,
    BusinessID: req.body.BusinessID
  }

  categoryModel.updateCategory(categoryData, (err, data) => {
    if(data && data.msg){
      res.status(200).json(data);
    } else  {
      res.status(500).json({msg: 'Error'})
    }
  })
}

function deleteCategory(req, res){
  categoryModel.deleteCategory(req.params.CategoryID, (error, data) => {
    if(data && data.msg){
      res.status(200).json(data);
    } else {
      res.status(500).json({msg: 'Error'})
    }
  })
}

module.exports = {
    listCategories,
    createCategory,
    updateCategory,
    deleteCategory
}
