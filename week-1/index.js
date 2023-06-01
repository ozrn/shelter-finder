class Survivor {
    constructor(idNum, hasFamilyMember) {
        this.idNum = idNum
        this.hasFamilyMember = hasFamilyMember
    }
    needPlace() {
        // method to ask for a place to stay
        this.hasFamilyMember ?
            console.log(`The survivor with the ID number of ${this.idNum} has family members and asks to stay with them in the same place.`)
            : console.log(`The survivor needs a place to stay.`);
    }
}

class Shelter {
    constructor(location, numOfResidents, maxCapacity) {
        this.location = location
        this.numOfResidents = numOfResidents
        this.maxCapacity = maxCapacity
    }
    checkAvailabilityFor(person) {
        // method to check whether there is any available place in a shelter or not
        (this.maxCapacity > this.numOfResidents) ?
            console.log(`There is an available place for the survivor with the ID number of ${person.idNum} in the ${this.location} shelter.`)
            : console.log(`Please check another shelter for its availability.`);

    }
}

class Stocks {
    constructor(typeOfStocks, amountOfStocks) {
        this.typeOfStocks = typeOfStocks
        this.amountOfStocks = amountOfStocks
    }
    checkStocks(amountOfNeeded) {
        ((amountOfNeeded) - (this.amountOfStocks) >= 0) ? console.log(`${this.typeOfStocks} is now out of stock.`)
            : console.log(`${this.typeOfStocks} is currently available.`);
    }
}

const walter = new Survivor(12345, true);
walter.needPlace();
const lisa = new Survivor(23456, false);
lisa.needPlace();
const eastShelter = new Shelter('East', 195, 200);
eastShelter.checkAvailabilityFor(walter);
const westShelter = new Shelter('West', 300, 300);
westShelter.checkAvailabilityFor(lisa);
const foodPackage = new Stocks('Food', 100);
foodPackage.checkStocks(50);
const carePackage = new Stocks('Care kit', 200);
carePackage.checkStocks(250);














