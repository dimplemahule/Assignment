const mongoose = require("mongoose")


//Name Validation
const isValidName =function(name){
    const  nameRegex =/^[a-zA-Z ]{2,30}$/
    return nameRegex.test(name)
}


//Mobile Validation
const isValidMobile = function (mobile) {
    var re = /^((\+91)?|91)?[6789][0-9]{9}$/;
    return re.test(mobile);
}

//Email Validation
const isValidEmail = function(email){
    const emailRegex = /^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/
    return emailRegex.test(email)
}

//Password Validation
const isValidPassword = function(password){
    const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/
    return passRegex.test(password)
}

//ObjectId Validation
const  isValidObjectId =function(id){
    var ObjectId = mongoose.Types.ObjectId;
    return ObjectId.isValid(id)
}


module.exports = { 
    isValidName,
    isValidMobile,   
    isValidEmail, 
    isValidPassword, 
    isValidObjectId, 
      
}
