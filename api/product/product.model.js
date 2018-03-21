const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({

    _id: String,

    name : {
        type: String,
        lowercase: true
    },
    image: String,
    link: String,
    price:{
        type: Number,
        default: 0
    },
    currency: String,
    description: String

});

module.exports = mongoose.model('Product',ProductSchema);