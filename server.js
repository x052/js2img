const FLAG = 'FLAG{C0lD_P1zZa_46804381}'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const fs = require('fs')
const path = require('path')
const publicPath = path.join(__dirname, '.')

const POC = require('./POC')

app.get('/', function (req, res) {
  res.redirect('/index.html')
})

app.get('/logo.bmp', function (req, res) {
  const javascriptCode = `console.log('Hello world!')`
  const image = POC(javascriptCode, 'input.bmp')

  res.set('Content-Type', 'text/html')
  res.send(image)
})

app.use('/', express.static(publicPath))

app.listen(8080)
