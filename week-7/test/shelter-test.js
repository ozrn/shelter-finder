const test = require('ava')
const request = require('supertest')
const app = require('../app')

// Test for getting a list of all shelters 
test('Get list of all shelters', async t => {
  t.plan(1)

  const res = await request(app).get('/shelter/all')
  t.is(res.status, 200)
})

// Test for getting a list of all available shelters that can be stayed at immediately!
test('Get list of all available shelters', async t => {
  t.plan(1)

  const res = await request(app).get('/shelter/all/show-available-shelters')
  t.is(res.status, 200)
})

// Test for creating a new shelter
test('Create a new shelter', async t => {
  t.plan(5)

  const newShelter = {
    name: 'Salvador City Hall',
    address: { city: 'Salvador city', addressDetail: '2345 Calle de Bambo' },
    maxCapacity: 250,
    residents: []
  }
  const res = await request(app)
    .post('/shelter')
    .send(newShelter)

  t.is(res.status, 200)
  t.is(res.body.name, newShelter.name)
  t.is(res.body.maxCapacity, newShelter.maxCapacity)
  t.deepEqual(res.body.address, newShelter.address)
  t.deepEqual(res.body.residents, newShelter.residents)
})

// Fetch a shelter after creating
test('Fetch a shelter', async t => {
  t.plan(1)
  const shelterToFetch = {
    name: 'Ataweru High School',
    address: { city: 'Bogota', addressDetail: '345 Avenida Suda' },
    maxCapacity: 80,
    residents: []
  }

  const fetchedShelter = (await request(app)
    .post('/shelter')
    .send(shelterToFetch)).body

  const fetchRes = await request(app).get(`/shelter/${fetchedShelter._id}`)
  t.is(fetchRes.status, 200)
})

// Delete a shelter
test('Delete a shelter', async t => {
  t.plan(3)
  // first of all, create a new shelter
  const shelterToCreate = {
    name: 'Barre Auditorium',
    address: { city: 'Barre', addressDetail: '16 Auditorium Hill' },
    maxCapacity: 30,
    residents: []
  }

  const shelterCreated = (await request(app)
    .post('/shelter')
    .send(shelterToCreate)).body

  const deleteRes = await request(app).delete(`/shelter/${shelterCreated._id}`)

  t.is(deleteRes.status, 200)
  t.is(deleteRes.ok, true)

  const fetch = await request(app).get(`/shelter/${shelterCreated._id}`)
  t.is(fetch.status, 404)
})


