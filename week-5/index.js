const express = require('express')
const bodyParser = require('body-parser')

const survivorRouter = require('./routes/survivor')
const shelterRouter = require('./routes/shelter')
const stockRouter = require('./routes/stock')

const app = express()

app.use(bodyParser.json())
app.set('view engine', 'pug')

app.use('/survivor', survivorRouter)
app.use('/shelter', shelterRouter)
app.use('/stock', stockRouter)

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})