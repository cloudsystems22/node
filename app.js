const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send("Bem vindo a uma aplicação node.js")
});



app.listen(3000, ()=> {
    console.log('Localhost 3000!');
});
