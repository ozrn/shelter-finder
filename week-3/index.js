const Survivor = require('./models/survivor')
const Shelter = require('./models/shelter')
const SurvivorService = require('./services/survivor-service')
const ShelterService = require('./services/shelter-service')

async function main() {

    const walter = new Survivor('Walter Brown', 12345, true)
    const lisa = new Survivor('Lisa Firth', 23456, false)

    const eastShelter = new Shelter('East', 200)
    const westShelter = new Shelter('West', 300)

    walter.stay(eastShelter)
    lisa.stay(westShelter)

    await SurvivorService.add(walter)
    await SurvivorService.add(lisa)

    await ShelterService.add(eastShelter)
    await ShelterService.add(westShelter)

    const survivors = await SurvivorService.findAll()


    const shelters = await ShelterService.findAll()

    //await SurvivorService.del(1)

    //const newSurvivors = await SurvivorService.findAll()

    // console.log(newSurvivors[0].fullName)

}

main()

