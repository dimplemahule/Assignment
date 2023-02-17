
const mongoose = require('mongoose')

const createSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    lname:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password: String,
    phone:{
        type:String,
        required:true,
        unique:true,
        trim:true
    }
    

},{timestamps:true})
module.exports = mongoose.model("user", createSchema)