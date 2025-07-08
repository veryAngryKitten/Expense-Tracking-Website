const express = require('express')
const app = express()

const Database = require('better-sqlite3');

// This will create 'mydatabase.db' if it doesn't exist
const db = new Database('users.db');

// You can now create tables
db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT,
        password TEXT,
        money REAL
    )
`);

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('dashboard')
})

app.get('/welcome', (req, res) => {
    res.render('landing_page')
})

app.post('/deposit', (req, res) => {
    console.log(req.body)
    res.redirect('/')
})

app.listen(3000)