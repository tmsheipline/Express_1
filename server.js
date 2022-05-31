const express = require('express')
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





app.listen(port, () => {
    console.log('app is running on port', port)
});