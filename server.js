const express = require('express')

const app = express()
const ballResponses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]


//Greetings
app.get('/greeting', (req, res) => {
    res.status(200).json({msg: 'Hello, stranger'})
})
app.get('/greeting/:name', (req, res) => {
    res.status(200).json({msg: `Hello, ${req.params.name}`})
})

//Tip Calculator
app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.status(200).json({msg: `${(parseInt(req.params.total) * parseInt(req.params.tipPercentage)) / 100 }`})
})

//Magic 8 Ball
app.get('/magic/Will%20I%20Be%20A%20Millionaire', (req,res) => {
    res.send(`<h1>${ballResponses[Math.floor(Math.random() * ballResponses.length)]}</h1>`)
})

//Fibonacci
app.get('/:fibonacci', (req, res) => {
    // res.status(200).json(`<title>Fibonacci</title>`)
    let checkFibonacci = req.params.fibonacci
    if (isSquare(5*(checkFibonacci*checkFibonacci)-4) || isSquare(5*(checkFibonacci*checkFibonacci)+4)) {
        res.send(`<h1>Very good. It is Fibonacci</h1>`)
    } res.send(`<h1>I can tell this is not a fibonacci number</h1>`)

    function isSquare(n) {
        return n > 0 && Math.sqrt(n) % 1 === 0;
    };
})


app.listen(3001, function() {
    console.log('listening to port 3001')
})