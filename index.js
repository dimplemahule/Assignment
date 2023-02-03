const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const route = require('./route/route')

const app = express()
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


app.use('/', route)

app.listen(3000, () =>{
    console.log('express is running on port', +3000)
})