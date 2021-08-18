const mongoose = require('mongoose');

// Product Schema
const productSchema = mongoose.Schema({
    name: String,
    image: String,
    countInStock: {type: Number, required: true},
});


// Create Model
module.exports = mongoose.model('Product', productSchema);
