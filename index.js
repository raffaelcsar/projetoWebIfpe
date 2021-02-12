const express = require("express")
const bodyParser = require('body-parser')
const path = require('path')
const fs = require("fs")

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/views/index.html')
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/views/login.html')
})

app.get('/clients', (req, res) => {
    res.sendFile(__dirname + '/public/views/clientList.html')
})

app.post('/login', (req, res) => {
    const body = req.body
    console.log("usuário capturado:", body)
    fs.readFile('./data.json', (err, data) => {
        let db = JSON.parse(data)
        console.log("DB:", db)
        let check = []
        db.forEach(user => {
            check.push(user.email)
        })
        console.log("USERS: ", check)
        console.log("SEARCHING USER:", body.email)
        if (check.indexOf(body.email) !== -1) {
            console.log("usuário fez login!")
            return res.status(200).send("Usuário fez login")
        }
        console.log("usuário não encontrado!")
        return res.status(422).send("Deu ruim cachoeira")
    })
})

app.listen(3000, () => console.log('listening on port: ' + 3000))