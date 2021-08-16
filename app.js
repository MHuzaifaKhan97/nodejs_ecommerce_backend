const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

// Middleware
app.use(bodyParser.json());
app.use(morgan('combined'));

// Product Schema
const productSchema = mongoose.Schema({
    name: String,
    image: String,
    countInStock: {type: Number, required: true},
});

// Create Modal
const Product = mongoose.model('Product', productSchema);

// For Public Variables
require('dotenv/config');

const api = process.env.API_URL;

// post data
app.post(`${api}/products`, (req, res) => {

    const product = new Product({
        name: req.body.name,
        image: req.body.image,
        countInStock: req.body.countInStock
    });
    product.save()
    .then((createdProduct) => res.status(200).json(createdProduct))
    .catch(err => res.status(500).json({
        error: err,
        success: false
    }));
})

// get data
app.get(`${api}/products`, async (req, res) => {
   const productList = await Product.find();

   if(!productList){
       res.status(500).json({
           success:false
       })
   }
    res.send(productList);
    // res.send('Server Started.');
})


mongoose.connect(process.env.CONNECTION_STRING,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => console.log('Database Connection is Ready'))
    .catch((err) => console.log(err))

app.listen(3000, () => {
    console.log(api);
    console.log('Successfully Server Started.!')
})