const BaseService = require('./base-service')
const ShelterModel = require('../models/shelter')

class ShelterService extends BaseService {
    model = ShelterModel
}

module.exports = new ShelterService()