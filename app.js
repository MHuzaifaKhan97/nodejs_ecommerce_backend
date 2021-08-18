const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Product = require('./models/product');

require('dotenv/config');

// For Public Variables
const api = process.env.API_URL;
const productRoutes = require('./routers/product');
const userRoutes = require('./routers/user');
const orderRoutes = require('./routers/order');
const categoryRoutes = require('./routers/category');

// Middleware
app.use(bodyParser.json());
app.use(morgan('combined'));

//Routes 
app.use(`${api}/products`, productRoutes);
app.use(`${api}/users`, userRoutes);
app.use(`${api}/orders`, orderRoutes);
app.use(`${api}/categories`, categoryRoutes);


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