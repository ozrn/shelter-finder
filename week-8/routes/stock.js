const express = require('express')
const router = express.Router()

const StockService = require('../services/stock-service')

router.get('/all', async (req, res) => {
    const stocks = await StockService.findAll()
    res.render('stock', { stocks })
})

router.get('/all/json', async (req, res) => {
    const stocks = await StockService.findAll()
    res.send(stocks)
})

router.get('/:id', async (req, res) => {
    const stock = await StockService.find(req.params.id)
    if (!stock) res.status(404)
    res.render('stock-info', { stock })
})

router.get('/check/:id/:neededAmount', async (req, res) => {
    const stockData = await StockService.find(req.params.id)
    const neededAmount = req.params.neededAmount
    const stockInquiry = await stockData.inquireStock(neededAmount)
    res.send(stockInquiry)
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

