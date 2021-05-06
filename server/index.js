const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()

// setup express server

const app = express()

// for any incoming path run the request through this function it will parse it to a JS object
app.use(express.json())
app.use(
  cors({
    origin: 'http://localhost:3000'
  })
)

app.listen(5000, () => console.log('server started on port 5000'))

// set up routers

app.use('/link', require('./routers/linkRouter'))

// connect to mongoDB

mongoose.connect(
  process.env.MDB_CONNECT_STRING,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (err) return console.error(err)
    console.log('connected to MongoDB')
  }
)
