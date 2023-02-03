
const mongoose = require('mongoose')

const createSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    phone:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password: String

},{timestamps:true})
module.exports = mongoose.model("user", createSchema)