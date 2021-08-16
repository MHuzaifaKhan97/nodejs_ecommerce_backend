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
    countInStock: Number,
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
    product.save().then((createdProduct)=> res.send(createdProduct));
})

// get data
app.get(`${api}/products`, (req, res) => {
    const product1 = {
        id: 1,
        name: 'Hair Dresser',
        image: 'some_url'

    }
    res.send(product1);
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