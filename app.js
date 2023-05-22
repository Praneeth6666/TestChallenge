const express = require('express')
const data = require('./data');
const app = express()
const port = 3000

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