const express = require('express')
const bodyParser = require('body-parser')

const SurvivorService = require('./services/survivor-service')
const ShelterService = require('./services/shelter-service')
const StockService = require('./services/stock-service')

const app = express()

app.use(bodyParser.json())
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

// Get stock data of all products in the specified URL
app.get('/stock/all', async (req, res) => {
    const stocks = await StockService.findAll()
    res.render('stock', { stocks: stocks })
})

// Get a specific survivor info
app.get('/survivor/:id', async (req, res) => {
    const id = req.params.id
    const survivorData = await SurvivorService.find(id)
    res.send(survivorData)
})

// Get a specific shelter info
app.get('/shelter/:id', async (req, res) => {
    const id = req.params.id
    const shelterData = await ShelterService.find(id)
    res.send(shelterData)
})

// Get a specific stock info
app.get('/stock/:id', async (req, res) => {
    const id = req.params.id
    const stockData = await StockService.find(id)
    res.send(stockData)
})

// Create a new survivor
app.post('/survivor', async (req, res) => {
    const newSurvivor = await SurvivorService.add(req.body)
    res.send(newSurvivor)
})

// Create a new shelter
app.post('/shelter', async (req, res) => {
    const newShelter = await ShelterService.add(req.body)
    res.send(newShelter)
})

// Create a new stock
app.post('/stock', async (req, res) => {
    const newStock = await StockService.add(req.body)
    res.send(newStock)
})

// Delete a specific survivor
app.delete('/survivor/:id', async (req, res) => {
    await SurvivorService.del(req.params.id)
    res.send('Successfully deleted')
})

// Delete a specific shelter
app.delete('/shelter/:id', async (req, res) => {
    await ShelterService.del(req.params.id)
    res.send('Successfully deleted')
})

// Delete a specific stock
app.delete('/stock/:id', async (req, res) => {
    await StockService.del(req.params.id)
    res.send('Successfully deleted')
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})