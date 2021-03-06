const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');
const orderRoutes = require('./routes/order');
const categoryRoutes = require('./routes/category');

require('dotenv/config');

// Enabling CORS
app.use(cors());
app.options('*',cors());

// Middleware
app.use(bodyParser.json());
app.use(morgan('combined'));

// For Public Variables
const api = process.env.API_URL;

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
    console.log('Successfully Server Started.!')
})