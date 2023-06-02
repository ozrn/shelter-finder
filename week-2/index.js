const Survivor = require("./survivor")
const Shelter = require("./shelter")
const Stocks = require("./stocks")

const walter = new Survivor(12345, true)
const lisa = new Survivor(23456, false)

const eastShelter = new Shelter("East", 195, 200)
const westShelter = new Shelter("West", 300, 300)

const foodPackage = new Stocks("Food", 100)
const carePackage = new Stocks("Care kit", 200)

walter.needPlace()
lisa.needPlace()

eastShelter.checkAvailabilityFor(walter)
westShelter.checkAvailabilityFor(lisa)

foodPackage.checkStocks(50)
carePackage.checkStocks(250)
