const userModel = require('../model/userModel')

const createUser = async function (req, res) {
      let data = req.body;
      let {email,phone,password} = data
      if (Object.keys(data).length < 1) 
      {
             return res.status(400).send({ 
                  status: false, message: "Data is required to create a user" 
            }) 
      }
        if (!email) {
             return res.status(400).send({
                  status: false, message: "Enter email" 
            }) 
      }
      if (!phone) {
            return res.status(400).send({
                 status: false, message: "Enter Phone" 
           }) 
     }
     if (!password) {
      return res.status(400).send({
           status: false, message: "Enter Password" 
     }) 
}
        
      let savedData = await userModel.create(data);
      res.status(201).save({ msg: savedData });
}

const createLogin = async function (req, res) {
      const { email, password } = req.body
      userModel.findOne({ email: email }, (err, user) => {
            if (user) {
                  if (password === user.password) {
                        res.send({ message: "Login Successfull", user: user })
                  } else {
                        res.send({ message: "Password didn't match" })
                  }
            } else {
                  res.send({ message: "User not Registerd" })
            }
      })
}

const createSignup = async function (req, res) {
      const {  email, phone, password } = req.body
      //if already register if the mail
      userModel.findOne({ email: email }, (err, user) => {
            if (user) {
                  res.send({ message: "User already registerd" })
            } else {
                  const user = new userModel({  //this is the user object
                        phone,
                        email,
                        password,

                  })
                  user.save(err => {
                        if (err) {
                              res.send(err)
                        } else {
                              res.send({ message: "successfully registerd" })
                        }
                  })
            }
      })

}

const getUserData = async function (req, res) {
      let userId = req.params.userId;
      let userDetail = await userModel.findById(userId);
      res.status(200).send({ msg: 'success', data: userDetail })
}

const updatedUserData = async function (req, res) {
      let data = req.body;
      let userId = req.params.userId;
      let userDetails = await userModel.findById(userId);
      let putData = await userModel.findByIdAndUpdate({ _id: userDetails }, data, { new: true })
      res.send({ status: true, data: putData });
}

module.exports = { createUser, getUserData, updatedUserData, createLogin, createSignup }