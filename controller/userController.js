const userModel = require('../model/userModel')
const jwt = require("jsonwebtoken");

const createUser = async function (req, res) {
      let data = req.body;
      let { fname,lname,email, phone, password } = data
      if (Object.keys(data).length < 1) {
            return res.status(400).send({status: false, message: "Data is required to create a user"})
      }
      if (!fname) {
            return res.status(400).send({ status: false, message: "Enter fname" })
      }
      if (!lname) {
            return res.status(400).send({ status: false, message: "Enter lname" })
      }
      if (!email) {
            return res.status(400).send({ status: false, message: "Enter email" })
      }
      if (!password) {
            return res.status(400).send({status: false, message: "Enter Password"})
      }
      if (!phone) {
            return res.status(400).send({status: false, message: "Enter Phone" })
      }
      let savedData = await userModel.create(data);
      res.status(201).send({ msg: savedData });
}

const loginUser = async function (req, res) {
      try {
            let userEmail = req.body.email;
            let userPassword = req.body.password;
            let getUser = await userModel.findOne({ email: userEmail, password: userPassword });
            if (!getUser) return res.status(404).send({ status: false, msg: "username & password is not corerct", })
            let token = jwt.sign({ userId: getUser._id }, "Function-Up radon");
            res.setHeader("x-api-key", token);
            return res.status(200).send({ status: true, msg: 'User Login Successfully', data: {token:token,userId:getUser._id}});
      } catch (err) {
            res.status(500).send({ status: false, error: err.message });
      }
};





module.exports = { createUser, loginUser }