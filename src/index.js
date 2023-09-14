const express = require('express');
const path =require('path');
const morgan = require('morgan');
const { engine }  = require('express-handlebars');
const app = express();
const port = 3000

//http logger
app.use(morgan('combined'))
//Template engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/view'));
// console.log('PATH: ', path.join(__dirname, 'resources/views'));
app.get('/trang-chu', (req, res)=>{
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 