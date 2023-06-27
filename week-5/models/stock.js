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

const StockModel = mongoose.model('Stock', StockSchema)

module.exports = StockModel


// module.exports = class Stock {
//     constructor(typeOfStock, amountOfStock, id) {
//         this.typeOfStock = typeOfStock
//         this.amountOfStock = amountOfStock
//         this.id = id
//     }
//     checkStocks(neededAmount) {
//         ((neededAmount) - (this.amountOfStock) >= 0) ? console.log(`${this.typeOfStock} is now out of stock.`)
//             : console.log(`${this.typeOfStock} is currently available.`)
//     }
//     static create({ typeOfStock, amountOfStock, id }) {
//         return new Stock(typeOfStock, amountOfStock, id)
//     }
// }