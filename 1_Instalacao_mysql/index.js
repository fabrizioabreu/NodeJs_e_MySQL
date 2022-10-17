const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('home')
})

//conexão com MySQL
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Password',
    database: 'nodemysql',
})

conn.connect(function (err) {

    if (err) {
        console.log('ERRO!! ' + err)
    } else {
        console.log('Conectado ao MySQL!')
    }

    app.listen(3000)

})