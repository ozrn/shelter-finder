const test = require('ava')
const request = require('supertest')
const app = require('../app')

// Test for getting a list of all stock items  
test('Get list of all items', async t => {
    t.plan(1)

    const res = await request(app).get('/stock/all')
    t.is(res.status, 200)
})

// Test for creating a new stock
test('Create a new stock', async t => {
    t.plan(3)

    const newStock = {
        typeOfStock: 'Emergency blanket',
        amountOfStock: 500
    }
    const res = await request(app)
        .post('/stock')
        .send(newStock)

    t.is(res.status, 200)
    t.is(res.body.typeOfStock, newStock.typeOfStock)
    t.is(res.body.amountOfStock, newStock.amountOfStock)
})

// Fetch a stock after creating
test('Fetch a stock', async t => {
    t.plan(1)
    const stockToFetch = {
        typeOfStock: 'Power bank',
        amountOfStock: 300
    }

    const fetchedStock = (await request(app)
        .post('/stock')
        .send(stockToFetch)).body

    const fetchRes = await request(app).get(`/stock/${fetchedStock._id}`)
    t.is(fetchRes.status, 200)
})

// Delete a stock
test('Delete a stock', async t => {
    t.plan(3)
    // first of all, create a new stock
    const stockToCreate = {
        typeOfStock: 'Baby supplies',
        amountOfStock: 250
    }

    const stockCreated = (await request(app)
        .post('/stock')
        .send(stockToCreate)).body

    const deleteRes = await request(app).delete(`/stock/${stockCreated._id}`)

    t.is(deleteRes.status, 200)
    t.is(deleteRes.ok, true)

    const fetch = await request(app).get(`/stock/${stockCreated._id}`)
    t.is(fetch.status, 404)
})
