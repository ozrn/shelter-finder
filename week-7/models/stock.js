const mongoose = require('mongoose')

const StockSchema = new mongoose.Schema({
    typeOfStock: {
        type: String,
        required: true
    },
    amountOfStock: {
        type: Number,
        required: true
    }
})

StockSchema.methods.inquireStock = function (neededAmount) {
    ((neededAmount) - (this.amountOfStock) >= 0) ? console.log(`${this.typeOfStock} is now out of stock.`)
        : console.log(`${this.typeOfStock} is currently available.`)
}

const StockModel = mongoose.model('Stock', StockSchema)

module.exports = StockModel
