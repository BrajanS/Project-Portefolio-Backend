const mongoose = require('mongoose')

const centreInteretsSchema = mongoose.Schema({
    interet: String
})

const centreInteretsModel = mongoose.model('Centre interets',centreInteretsSchema)

module.exports = centreInteretsModel;