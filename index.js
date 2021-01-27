const express = require("express")
const path = require('path')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.listen(3000, () => console.log('listening on port: ' + 3000))