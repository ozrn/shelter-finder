const BaseService = require('./base-service')
const SurvivorModel = require('../models/survivor')

class SurvivorService extends BaseService {
    model = SurvivorModel
}

module.exports = new SurvivorService()