const express = require('express');
const { User } = require('./app/models');
var bodyParser = require('body-parser');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  
  res.send('Hello World!');
});

User.create({ name: "Samus", email: "claudio@rocketseat.com.br", password: "123456" });

app.listen(3000);
console.log("working in 3000");