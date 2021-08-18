const mongoose = require('mongoose');

// Category Schema
const categorySchema = mongoose.Schema({
    name: String,
    image: String,
    countInStock: {type: Number, required: true},
});


// Create Model
exports.Category = mongoose.model('Category', categorySchema);
