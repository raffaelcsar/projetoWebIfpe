const express = require("express")
const bodyParser = require('body-parser')
const path = require('path')
const fs = require("fs")

const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/views/index.html')
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/views/login.html')
})

app.post('/login', (req, res) => {
  const body = req.body
  fs.readFile('./data.json', (err, data) => {
    let db = JSON.parse(data)
    let check = []
    db.forEach(user => {
      check.push(user.email)
    })
    if(check.indexOf(body.email) !== -1)
      return res.send("Usuário fez login")
    return res.send("Deu ruim cachoeira")
  })
})

app.listen(3000, () => console.log('listening on port: ' + 3000))