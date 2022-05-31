const express = require('express');
const app = express();
const port = 3000;

const verses = [`bottles of beer on the wall. `,
` bottles of beer!`,
`Take one down, pass it around..` ]

app.get('/', (req,res) => {
    let link = `<a href="http://localhost:3000/98">${verses[2]}</a>`
    res.send(`99 ${verses[0]} 99${verses[1]} ${link}`)
});

app.get('/:num' , (req,res) => {
    if (req.params.num > 0){
        let num = req.params.num
        let link = `<a href="http://localhost:3000/${req.params.num - 1}">${verses[2]}</a>`
        res.send(`${num} ${verses[0]} ${num} ${verses[0]} ${num} ${verses[1]} ${link}`)
    } else {
        res.send(`You're Drunk. Go to the store in an Uber for more....<a href="http://localhost:3000/">Restart here!</a>`)
    }
})


app.listen(port, () => {
    console.log(`app is running on port`);
});