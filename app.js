const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send("Bem vindo a uma aplicação node.js, testando Elastic Beanstalk AWS!")
});


const port = process.env.port || 3000
app.listen(port, ()=> {
    console.log('Localhost 3000!');
});
