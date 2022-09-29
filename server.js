const express = require('express')

const app = express()

app.get('/greeting', (req, res) => {
    res.status(200).json({msg: 'Hello, stranger'})
})
app.get('/greeting/:name', (req, res) => {
    res.status(200).json({msg: `Hello, ${req.params.name}`})
})

app.listen(3001, function() {
    console.log('listening to port 3001')
})