const express = require('express')
const SurvivorService = require('./services/survivor-service')
const ShelterService = require('./services/shelter-service')

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

// Fetch all shelters in the specified path when they're being browsed
app.get('/shelter/all', async (req, res) => {
    const shelters = await ShelterService.findAll()
    res.render('shelter', { shelters: shelters })
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})

