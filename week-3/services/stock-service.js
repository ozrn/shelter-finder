const BaseService = require('./base-service')
const StockModel = require('../models/stock')

class StockService extends BaseService {
    constructor() {
        super(StockModel, `${__dirname}/../stock-database.json`)
    }
}

module.exports = new StockService()