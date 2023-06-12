const BaseService = require('./base-service')
const SurvivorModel = require('../models/survivor')

class SurvivorService extends BaseService {
    constructor() {
        super(SurvivorModel, `${__dirname}/../survivor-database.json`)
    }
}

module.exports = new SurvivorService()