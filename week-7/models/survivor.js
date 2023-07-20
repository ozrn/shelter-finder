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



