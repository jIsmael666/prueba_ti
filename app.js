const express = require('express');
const myconnection = require ('express-myconnection');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const handlbars = require(express-handlebars);

app.set('port', 4000);
app.set('views', __dirname + '/views');
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('views',);
app.use(myconnection(mysql,{
    host: 'localhost', 
    user: 'root',
    password: '',
    port: '3306',
    database: 'ventas', 
}))

app.listen(app.get('port')), function() {
    console.log('Listening on port', app.get('port'));
}

app.get('/', (req, res) =>{
    res.render('home');
})