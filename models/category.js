const mongoose = require('mongoose');

// Category Schema
const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
    },
    color: {
        type: String,
    },
   
});


// Create Model
module.exports = mongoose.model('Category', categorySchema);
