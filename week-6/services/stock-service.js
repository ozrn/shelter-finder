const BaseService = require('./base-service')
const StockModel = require('../models/stock')

class StockService extends BaseService {
    model = StockModel
}

module.exports = new StockService()