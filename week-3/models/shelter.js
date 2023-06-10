const Survivor = require("./survivor")

module.exports = class Shelter {
    constructor(name, maxCapacity, id, residents = []) {
        this.name = name
        this.maxCapacity = maxCapacity
        this.id = id
        this.residents = residents
    }

    checkAvailability() {
        // method to check whether there is any available place in a shelter or not
        (this.maxCapacity > this.residents.length) ?
            console.log(`There are ${this.maxCapacity - this.residents.length} available places in this shelter.`)
            : console.log(`Please check another shelter for its availability.`)

    }

    static create({ name, maxCapacity, id, residents }) {
        const newShelter = new Shelter(name, maxCapacity, id, residents)
        newShelter.residents = residents.map(Survivor.create)
        return newShelter
    }
}
