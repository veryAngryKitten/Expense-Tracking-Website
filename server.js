const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('dashboard')
})

app.post('/deposit', (req, res) => {
    console.log(req.body)
    res.render("dashboard")
})

app.listen(3000)