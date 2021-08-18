const mongoose = require('mongoose');

// Product Schema
const productSchema = mongoose.Schema({
    name: String,
    image: String,
    countInStock: {type: Number, required: true},
});


// Create Model
exports.Product = mongoose.model('Product', productSchema);
