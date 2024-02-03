require('dotenv').config()

const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/admin', (req, res) => {
    res.send('Welcome admin gauravpatil9788860');
});

app.get('/login',(req,res)=>{
    res.send('<h1>Plz login </h1>')
});

app.get('/linkdein',(req,res)=>{
    res.send('<h1>Sucessfully login to Linkdeiln</h1>')
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port  ${port}`);
});
