const express = require('express')
const router = express.Router()

const SurvivorService = require('../services/survivor-service')

router.get('/all', async (req, res) => {
    const survivors = await SurvivorService.findAll()
    res.render('survivor', { survivors: survivors })
})

router.get('/:id', async (req, res) => {
    const survivor = await SurvivorService.find(req.params.id)
    res.render('survivor-data', { survivor: survivor })
})

router.post('/', async (req, res) => {
    const newSurvivor = await SurvivorService.add(req.body)
    res.send(newSurvivor)
})

router.delete('/:id', async (req, res) => {
    await SurvivorService.del(req.params.id)
    res.send('Successfully deleted')
})

module.exports = router