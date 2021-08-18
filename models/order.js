const mongoose = require('mongoose');

// Order Schema
const orderSchema = mongoose.Schema({
    name: String,
    image: String,
    countInStock: {type: Number, required: true},
});


// Create Model
module.exports = mongoose.model('Order', orderSchema);
