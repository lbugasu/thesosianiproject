const express = require('express');
const path = require('path')
const publicPath = path.resolve(__dirname, "public");


const app = express();
app.use(express.static(publicPath));

app.set('view engine', 'hbs');

app.get('/', function (req, res){
    res.render('home.hbs')
})

app.listen(4000);