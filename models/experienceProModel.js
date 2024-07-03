const mongoose = require('mongoose')

const experienceProSchema = mongoose.Schema({
    Annee: {type: String, required:[true,"Champ 'Année' est requis"]},
    Entreprise: {type: String, required:[true,"Champ 'Entreprise' est requis"]},
    Poste: {type: String, required:[true,"Champ 'Poste' est requis"]},
    Mission: {type: String, required:[true,"Champ 'Mission' est requis"]}
})

const experienceProModel = mongoose.model('Experience professionnel',experienceProSchema)

module.exports = experienceProModel;