module.exports = class Stock {
    constructor(typeOfStock, amountOfStock) {
        this.typeOfStock = typeOfStock
        this.amountOfStock = amountOfStock
    }
    checkStocks(neededAmount) {
        ((neededAmount) - (this.amountOfStock) >= 0) ? console.log(`${this.typeOfStock} is now out of stock.`)
            : console.log(`${this.typeOfStock} is currently available.`)
    }
}