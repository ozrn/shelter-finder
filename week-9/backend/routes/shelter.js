const express = require('express')
const router = express.Router()

const ShelterService = require('../services/shelter-service')
const SurvivorService = require('../services/survivor-service')

router.get('/all', async (req, res) => {
    const shelters = await ShelterService.findAll()
    res.render('shelter', { shelters })
})

router.get('/all/show-available-shelters', async (req, res) => {
    const availableShelters = await ShelterService.showAvailableShelters()
    res.send(availableShelters)
})

router.get('/all/show-available-shelters/json', async (req, res) => {
    const availableShelters = await ShelterService.showAvailableShelters()
    res.send(availableShelters)
})

router.get('/check/:id', async (req, res) => {
    const shelterData = await ShelterService.find(req.params.id)
    const shelterCheck = await shelterData.checkAvailability()
    res.send(shelterCheck)
})

router.get('/:id', async (req, res) => {
    const shelter = await ShelterService.find(req.params.id)
    if (!shelter) res.status(404)
    res.render('shelter-info', { shelter })
})

router.get('/:id/json', async (req, res) => {
    const shelter = await ShelterService.find(req.params.id)
    if (!shelter) res.status(404)
    res.send(shelter)
})

router.post('/', async (req, res) => {
    const newShelter = await ShelterService.add(req.body)
    res.send(newShelter)
})

router.post('/:id/', async (req, res) => {
    const shelter = await ShelterService.find(req.params.id)
    const survivor = await SurvivorService.find(req.body.survivorId)
    await SurvivorService.stayShelter(survivor, shelter)
    res.send(survivor)
})

router.delete('/:id', async (req, res) => {
    const shelterData = await ShelterService.del(req.params.id)
    res.send(shelterData)
})

module.exports = router



