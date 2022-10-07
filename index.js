const express = require('express')
const bodyParser = require('body-parser')

const CurrencyRoute = require('./route/currencyRoute');

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('',(req, res)=>{
    res.json('hello world');
})

const port =3000

app.listen(port, ()=> {
    console.log(`api  up and running ${port}`)
})

app.use('/api/v1/currency',CurrencyRoute);