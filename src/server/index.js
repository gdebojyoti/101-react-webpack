const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('I got in')
})

app.listen(3000)