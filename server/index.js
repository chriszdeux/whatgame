const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const port = process.env.PORT || 5000

//ROUTES
const mainRoute = require('./routes/index');

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Welcome to WhatGame!')
})

app.use(mainRoute)

// app.use(gameRoutes)



app.listen(port, () => {
  console.log(`server running port: ${ port }`)
  console.log(`To end the server CTRL + C`)
})

