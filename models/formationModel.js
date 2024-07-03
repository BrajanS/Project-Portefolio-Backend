const mongoose = require('mongoose')

const formationSchema = mongoose.Schema({
    Annee: {type: String, required:[true,"Champ Annee est requis"]},
    Etablissement: {type: String, required:[true,"Champ Etablissement est requis"]},
    Diplome: {type: String, required:[true,"Champ Diplome est requis"]}
})

const formationModel = mongoose.model('Formation',formationSchema)

module.exports = formationModel;