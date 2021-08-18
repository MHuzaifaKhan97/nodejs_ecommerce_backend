const mongoose = require('mongoose');

// User Schema
const userSchema = mongoose.Schema({
    name: String,
    image: String,
    countInStock: {type: Number, required: true},
});


// Create Model
module.exports = mongoose.model('User', userSchema);
