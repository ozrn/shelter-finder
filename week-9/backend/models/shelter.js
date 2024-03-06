const mongoose = require('mongoose')

const ShelterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        city: {
            type: String,
            required: true
        },
        addressDetail: {
            type: String,
            required: true
        }
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

ShelterSchema.methods.checkAvailability = function () {
    (this.maxCapacity > this.residents.length) ?
        console.log(`There are ${this.maxCapacity - this.residents.length} available places in this shelter.`)
        : console.log(`Please check another shelter for its availability.`)
}

const ShelterModel = mongoose.model('Shelter', ShelterSchema)

module.exports = ShelterModel