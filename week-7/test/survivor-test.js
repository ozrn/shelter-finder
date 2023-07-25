const test = require('ava')
const request = require('supertest')
const app = require('../app')

// Create a new survivor 
test('Create a new survivor', async t => {
    t.plan(4)
    const newSurvivor = {
        fullName: 'Penelope Garcia',
        gender: 'female',
        age: 34,
        shelter: []
    }

    const res = await request(app)
        .post('/survivor')
        .send(newSurvivor)

    // checking for server response status success
    t.is(res.status, 200)

    // comparing the created survivor's data
    t.is(res.body.fullName, newSurvivor.fullName)
    t.is(res.body.gender, newSurvivor.gender)
    t.is(res.body.age, newSurvivor.age)
})

// Fetch a survivor after creating
test('Fetch a survivor', async t => {
    t.plan(1)
    const survivorToFetch = {
        fullName: 'Spencer Reid',
        gender: 'male',
        age: 25,
        shelter: []
    }

    // create a new survivor to fetch
    const fetchedSurvivor = (await request(app)
        .post('/survivor')
        .send(survivorToFetch)).body

    // fetch the survivor we just created
    const fetchRes = await request(app).get(`/survivor/${fetchedSurvivor._id}`)
    // checking for server response status success
    // this endpoint is rendering into HTML
    t.is(fetchRes.status, 200)
})

// Delete a survivor
test('Delete a survivor', async t => {
    t.plan(3)
    // first of all, create a new survivor
    const survivorToCreate = {
        fullName: 'Angel Salvaro',
        gender: 'male',
        age: 11,
        shelter: []
    }

    const survivorCreated = (await request(app)
        .post('/survivor')
        .send(survivorToCreate)).body


    // delete the survivor
    const deleteRes = await request(app).delete(`/survivor/${survivorCreated._id}`)

    t.is(deleteRes.status, 200)
    t.is(deleteRes.ok, true)
    // trying to render the detail page for the deleted user
    const fetch = await request(app).get(`/survivor/${survivorCreated._id}`)
    // checking for server response status - page not found 404
    t.is(fetch.status, 404)
})

