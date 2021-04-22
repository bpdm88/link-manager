const express = require('express')
const mongoose = require('mongoose')

// setup express server

const app = express()

// for any incoming path run the request through this function it will parse it to a JS object
app.use(express.json())

app.listen(5000, () => console.log('server started on port 5000'))

// set up routers

app.use('/link', require('./routers/linkRouter'))

// connect to mongoDB

mongoose.connect(
  'mongodb+srv://bpdm88:gEx9TB1cMGHIEckM@link-manager-cluster.twbfl.mongodb.net/main?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (err) return console.error(err)
    console.log('connected to MongoDB')
  }
)
