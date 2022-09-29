const express = require('express')

const app = express()

app.get('/greeting', (req, res) => {
    res.status(200).json({msg: 'Hello, stranger'})
})
app.get('/greeting/:name', (req, res) => {
    res.status(200).json({msg: `Hello, ${req.params.name}`})
})
app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.status(200).json({msg: `${(parseInt(req.params.total) * parseInt(req.params.tipPercentage)) / 100 }`})
})

app.listen(3001, function() {
    console.log('listening to port 3001')
})