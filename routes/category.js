const Category = require('../models/category');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const categoryList = await Category.find();

    if (!categoryList) {
        res.status(500).json({ success: false });
    }
    res.send(categoryList);
})

router.post('/', async (req, res) => {

    if(req.body.name === null || req.body.name === "" || req.body.name === undefined){
        return res.status(400).send({
            success: false,
            message:'Name is required'
        })
    }
    let category = new Category({
        name: req.body.name,
        icon: req.body.icon,
        color: req.body.color,
    });

    category = await category.save();
    if (!category) {
        return res.status(404).send({ success: false, message: 'Category can not be created' });
    }
    res.send({
        success: true,
        message: 'Category is successfully created'
    })

});

module.exports = router;