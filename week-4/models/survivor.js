module.exports = class Survivor {
    constructor(fullName, idNum, hasFamilyMember, id, place) {
        this.fullName = fullName
        this.idNum = idNum
        this.hasFamilyMember = hasFamilyMember
        this.id = id
        this.place = place
    }

    // needPlace() {
    //     // method to ask for a place to stay
    //     this.hasFamilyMember ?
    //         console.log(`The survivor with the ID number of ${this.idNum} has family members and asks to stay with them in the same place.`)
    //         : console.log(`The survivor needs a place to stay.`)
    // }

    stay(place) {
        this.place = place.name
        place.residents.push(this)
    }
    static create({ fullName, idNum, hasFamilyMember, id, place }) {
        return new Survivor(fullName, idNum, hasFamilyMember, id, place)
    }
}
