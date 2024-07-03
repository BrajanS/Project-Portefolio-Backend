const mongoose = require('mongoose')
const contactSchema = mongoose.Schema({
    nom: String,
    prenom: String,
    email: String,
    tel: String,
    adresse: String
})

const Contact = mongoose.model('contact',contactSchema)
module.exports = Contact;