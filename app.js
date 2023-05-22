const express = require('express')
var bodyParser = require('body-parser')
const data = require('./data');
const app = express()
const port = 3000


app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json(data)
})

app.post('/create', (req, res) => {
    console.log(req.body);
    res.send('record created succesfully')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})