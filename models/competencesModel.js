const mongoose = require('mongoose')

const competenceModel = mongoose.Schema({
    value: {type:String}
})

const Competences = mongoose.model('competences',competenceModel)
module.exports = Competences;