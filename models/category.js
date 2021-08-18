const mongoose = require('mongoose');

// Category Schema
const categorySchema = mongoose.Schema({
    name: String,
    image: String,
    countInStock: {type: Number, required: true},
});


// Create Model
module.exports = mongoose.model('Category', categorySchema);
