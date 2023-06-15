const Survivor = require('./models/survivor')
const Shelter = require('./models/shelter')
const Stock = require('./models/stock')
const SurvivorService = require('./services/survivor-service')
const ShelterService = require('./services/shelter-service')
const StockService = require('./services/stock-service')

async function main() {

    const walter = new Survivor('Walter Brown', 12345, true)
    const lisa = new Survivor('Lisa Firth', 23456, false)

    const eastShelter = new Shelter('East', 200)
    const westShelter = new Shelter('West', 300)

    const foodPackage = new Stock('Food', 100)
    const carePackage = new Stock('Care kit', 200)

    walter.stay(eastShelter)
    lisa.stay(westShelter)

    await SurvivorService.add(walter)
    await SurvivorService.add(lisa)

    await ShelterService.add(eastShelter)
    await ShelterService.add(westShelter)

    await StockService.add(foodPackage)
    await StockService.add(carePackage)

    const survivors = await SurvivorService.findAll()


    const shelters = await ShelterService.findAll()

    const stocks = await StockService.findAll()

    //await SurvivorService.del(1)

    //const newSurvivors = await SurvivorService.findAll()

    // console.log(newSurvivors[0].fullName)

}

main()

