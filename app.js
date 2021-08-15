const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

// Middleware
app.use(bodyParser.json());
app.use(morgan('combined'));

require('dotenv/config');

const api = process.env.API_URL;

// get data
app.get(`${api}/products`,(req,res)=>{
    const product1 = {
        id:1,
        name:'Hair Dresser',
        image:'some_url'

    }
    res.send(product1);
    // res.send('Server Started.');
})
// post data
app.post(`${api}/products`,(req,res)=>{
    const newProduct = req.body;
    console.log(newProduct);
    res.send(newProduct);
    // res.send('Server Started.');
})

app.listen(3000,() => {
    console.log(api);
    console.log('Successfully Server Started.!')
})