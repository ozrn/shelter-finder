const express = require('express')
const router = express.Router()

const SurvivorService = require('../services/survivor-service')
const ShelterService = require('../services/shelter-service')

router.get('/all', async (req, res) => {
    const survivors = await SurvivorService.findAll()
    res.render('survivor', { survivors })
})

router.get('/:id', async (req, res) => {
    const survivor = await SurvivorService.find(req.params.id)
    res.render('survivor-info', { survivor })
})

router.post('/', async (req, res) => {
    const newSurvivor = await SurvivorService.add(req.body)
    res.send(newSurvivor)
})

router.delete('/:id', async (req, res) => {
    await SurvivorService.del(req.params.id)
    res.send('Successfully deleted')
})

router.post('/:id/shelter', async (req, res) => {
    const survivor = await SurvivorService.find(req.params.id)
    const shelter = await ShelterService.find(req.body.shelter)
    await SurvivorService.stayShelter(survivor, shelter)
    res.send(survivor)
})

module.exports = router