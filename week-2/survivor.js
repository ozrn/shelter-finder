module.exports = class Survivor {
    constructor(fullName, idNum, hasFamilyMember) {
        this.fullName = fullName
        this.idNum = idNum
        this.hasFamilyMember = hasFamilyMember
    }
    needPlace() {
        // method to ask for a place to stay
        this.hasFamilyMember ?
            console.log(`The survivor with the ID number of ${this.idNum} has family members and asks to stay with them in the same place.`)
            : console.log(`The survivor needs a place to stay.`)
    }
    static create({ fullName, idNum, hasFamilyMember }) {
        return new Survivor(fullName, idNum, hasFamilyMember)
    }
}
