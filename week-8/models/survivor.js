const mongoose = require('mongoose')

const SurvivorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    hasMicrochip: {
        type: Boolean,
        required: true
    },
    shelter: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Shelter',
        autopopulate: {
            maxDepth: 1
        }
    }],
    type: {
        type: String,
        required: true
    }
})

SurvivorSchema.plugin(require('mongoose-autopopulate'))

const SurvivorModel = mongoose.model('Survivor', SurvivorSchema)

module.exports = SurvivorModel



