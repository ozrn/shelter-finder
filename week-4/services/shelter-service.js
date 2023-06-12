const BaseService = require('./base-service')
const ShelterModel = require('../models/shelter')

class ShelterService extends BaseService {
    constructor() {
        super(ShelterModel, `${__dirname}/../shelter-database.json`)
    }
}

module.exports = new ShelterService()