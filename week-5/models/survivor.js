const mongoose = require('mongoose')

const SurvivorSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    shelter: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Shelter',
        autopopulate: {
            maxDepth: 1
        }
    }]
})

SurvivorSchema.plugin(require('mongoose-autopopulate'))

const SurvivorModel = mongoose.model('Survivor', SurvivorSchema)

module.exports = SurvivorModel

// module.exports = class Survivor {
//     constructor(fullName, idNum, hasFamilyMember, id, place) {
//         this.fullName = fullName
//         this.idNum = idNum
//         this.hasFamilyMember = hasFamilyMember
//         this.id = id
//         this.place = place
//     }

//     // needPlace() {
//     //     // method to ask for a place to stay
//     //     this.hasFamilyMember ?
//     //         console.log(`The survivor with the ID number of ${this.idNum} has family members and asks to stay with them in the same place.`)
//     //         : console.log(`The survivor needs a place to stay.`)
//     // }

//     stay(place) {
//         this.place = place.name
//         place.residents.push(this)
//     }
//     static create({ fullName, idNum, hasFamilyMember, id, place }) {
//         return new Survivor(fullName, idNum, hasFamilyMember, id, place)
//     }
// }


