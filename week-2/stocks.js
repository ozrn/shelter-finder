module.exports = class Stocks {
    constructor(typeOfStocks, amountOfStocks) {
        this.typeOfStocks = typeOfStocks
        this.amountOfStocks = amountOfStocks
    }
    checkStocks(neededAmount) {
        ((neededAmount) - (this.amountOfStocks) >= 0) ? console.log(`${this.typeOfStocks} is now out of stock.`)
            : console.log(`${this.typeOfStocks} is currently available.`)
    }
}