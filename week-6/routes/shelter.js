const express = require('express')
const router = express.Router()

const ShelterService = require('../services/shelter-service')

router.get('/all', async (req, res) => {
    const shelters = await ShelterService.findAll()
    res.render('shelter', { shelters: shelters })
})

router.get('/:id', async (req, res) => {
    const shelterData = await ShelterService.find(req.params.id)
    res.send(shelterData)
})

router.post('/', async (req, res) => {
    const newShelter = await ShelterService.add(req.body)
    res.send(newShelter)
})

router.delete('/:id', async (req, res) => {
    const shelterData = await ShelterService.del(req.params.id)
    res.send(shelterData)
})

router.get('/check/:id', async (req, res) => {
    const shelterData = await ShelterService.find(req.params.id)
    const shelterCheck = await shelterData.checkAvailability()
    res.send(shelterCheck)
})

router.get('/show-available-shelters/:id', async(req, res) => {
    const shelterData = await ShelterService.find(req.params.id)
    const availableShelters = await shelterData.showAvailableShelters()
    res.send(availableShelters)
})

module.exports = router



