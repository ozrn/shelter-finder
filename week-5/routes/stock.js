const express = require('express')
const router = express.Router()

const StockService = require('../services/stock-service')

router.get('/all', async (req, res) => {
    const stocks = await StockService.findAll()
    res.render('stock', { stocks: stocks })
})

router.get('/:id', async (req, res) => {
    const stockData = await StockService.find(req.params.id)
    res.send(stockData)
})

router.post('/', async (req, res) => {
    const newStock = await StockService.add(req.body)
    res.send(newStock)
})

router.delete('/:id', async (req, res) => {
    await StockService.del(req.params.id)
    res.send('Successfully deleted')
})

module.exports = router