const mongoose = require('mongoose')

const ShelterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    maxCapacity: {
        type: Number,
        required: true
    },
    residents: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Survivor',
        autopopulate: {
            maxDepth: 1
        }
    }]
})

ShelterSchema.plugin(require('mongoose-autopopulate'))

const ShelterModel = mongoose.model('Shelter', ShelterSchema)

module.exports = ShelterModel

// const Survivor = require("./survivor")

// module.exports = class Shelter {
//     constructor(location, maxCapacity, id, residents = []) {
//         this.location = location
//         this.maxCapacity = maxCapacity
//         this.id = id
//         this.residents = residents
//     }

//     checkAvailability() {
//         // method to check whether there is any available place in a shelter or not
//         (this.maxCapacity > this.residents.length) ?
//             console.log(`There are ${this.maxCapacity - this.residents.length} available places in this shelter.`)
//             : console.log(`Please check another shelter for its availability.`)

//     }

//     static create({ location, maxCapacity, id, residents }) {
//         const newShelter = new Shelter(location, maxCapacity, id, residents)
//         newShelter.residents = residents.map(Survivor.create)
//         return newShelter
//     }
// }


