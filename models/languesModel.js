const mongoose = require('mongoose')
const langSchema = mongoose.Schema({
    langName: String,
    langLevel: String
})

const Langues = mongoose.model('langues',langSchema)
module.exports = Langues;