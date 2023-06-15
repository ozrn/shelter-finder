module.exports = class Stock {
    constructor(typeOfStock, amountOfStock, id) {
        this.typeOfStock = typeOfStock
        this.amountOfStock = amountOfStock
        this.id = id
    }
    checkStocks(neededAmount) {
        ((neededAmount) - (this.amountOfStock) >= 0) ? console.log(`${this.typeOfStock} is now out of stock.`)
            : console.log(`${this.typeOfStock} is currently available.`)
    }
    static create({ typeOfStock, amountOfStock, id }) {
        return new Stock(typeOfStock, amountOfStock, id)
    }
}