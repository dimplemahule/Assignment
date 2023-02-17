const express = require('express');
const bodyParser = require('body-parser');
const route = require('./route/route')
const mongoose = require('mongoose');

const app = express()
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded());

mongoose.connect("mongodb+srv://LalitaMahule:lali123456789@cluster0.ypjvt.mongodb.net/Node?retryWrites=true&w=majority",{
    useNewUrlParser: true
})
.then( () => console.log("MongoDB is connected"))
.catch ( ( err => console.log(err)))

app.use('/', route)

app.listen(3000, () =>{
    console.log('express is running on port', +3000)
})