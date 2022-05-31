const express = require('express');
const { receiveMessageOnPort } = require('worker_threads');
const app = express();

const port = 3000;

app.get('/greeting/:name', (req,res) => {
    res.send(`What's up ${req.params.name}`)
})


app.get('/tip/:total/:tipPercentage', (req,res) => {
    let total = Number(req.params.total);
    let tipPercentage = Number(req.params.tipPercentage);
    let tip = (tipPercentage / 100) * total
    // let sum = total(tipPercentage / 100)
    res.send(`${tip}`)  
})

app.get('/magic/:question', (req,res) => {
    let question = req.params.question
    let response = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

    res.send(`<h1>Question: ${question}. Answer: ${response[Math.floor(Math.random() * response.length)]} </h1>`)})





app.listen(port, () => {
    console.log('app is running on port', port)
});