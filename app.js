const express = require('express')
var bodyParser = require('body-parser')
const issues = require('./data');
const app = express()
const port = 3000


app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//Api's 
app.get('/', (req, res) => {
    res.json(issues)
})

app.get('/:id', (req, res) => {
    // res.json(data)
    const issue= issues.find(d => d.id === parseInt(req.params.id));
    if(!issue) res.status(404).send("no issue found with this id")
    res.send(issue)
})

app.post('/create', (req, res) => {
    console.log(req.body);
    res.send('record created succesfully')
})

app.put('/update', (req, res) => {
    console.log(req.body);
    res.send('record updated succesfully')
})
app.delete('/delete', (req, res) => {
    console.log(req.body?.id);
    res.send('record deleted succesfully')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})