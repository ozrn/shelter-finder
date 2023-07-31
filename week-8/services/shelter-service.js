const BaseService = require('./base-service')
const ShelterModel = require('../models/shelter')

class ShelterService extends BaseService {
    model = ShelterModel

    async showAvailableShelters() {
        return await ShelterModel.find().$where('this.maxCapacity > this.residents.length')
    }
}

module.exports = new ShelterService()