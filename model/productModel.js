const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId

const productSchema = new mongoose.Schema({
    productname: {
        type: String,
        required: true,
        unqiue: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    Quantity: {
        type: Number,
        required: true,
        trim: true
    },
    userId: {
        type: objectId,
        ref: "user",
        required: true,
        trim: true
    }
}, { timestamps: true });

module.exports = mongoose.model('productmodel', productSchema)



