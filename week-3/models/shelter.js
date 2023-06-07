module.exports = class Shelter {
    constructor(location, numOfResidents, maxCapacity) {
        this.location = location
        this.numOfResidents = numOfResidents
        this.maxCapacity = maxCapacity
    }
    checkAvailabilityFor(person) {
        // method to check whether there is any available place in a shelter or not
        (this.maxCapacity > this.numOfResidents) ?
            console.log(`There is an available place for the survivor with the ID number of ${person.idNum} in the ${this.location} shelter.`)
            : console.log(`Please check another shelter for its availability.`)

    }
}
