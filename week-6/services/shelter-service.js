const BaseService = require('./base-service')
const ShelterModel = require('../models/shelter')
const SurvivorModel = require('../models/survivor')

class ShelterService extends BaseService {
    model = ShelterModel

    async showAvailableShelters() {
        // how to get residents.length and compare it to maxCapacity for each document??
        // return await ShelterModel.find({maxCapacity: {$gt: residents.length}})
        return await ShelterModel.find({ maxCapacity: { $gt: 50 } })
    }
}

module.exports = new ShelterService()