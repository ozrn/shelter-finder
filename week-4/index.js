const express = require('express')
const SurvivorService = require('./services/survivor-service')

const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index')
})
// Show all survivors in the specified path when they're being browsed
app.get('/survivor/all', async (req, res) => {
    const survivors = await SurvivorService.findAll()
    res.render('survivor', { survivors: survivors })
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})
