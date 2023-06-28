const BaseService = require('./base-service')
const SurvivorModel = require('../models/survivor')

class SurvivorService extends BaseService {
    model = SurvivorModel

    async stayShelter(survivor, shelter) {
        survivor.shelter.push(shelter)
        shelter.residents.push(survivor)
        await survivor.save()
        await shelter.save()
    }
}

module.exports = new SurvivorService()