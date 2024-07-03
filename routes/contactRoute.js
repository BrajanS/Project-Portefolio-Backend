const express = require('express')
const route = express.Router()
const contactSchema = require('../models/contactModel.js')

route.get('/contact',async (req,res)=>{
    const contact = await contactSchema.find();
    // console.log(contact);
    res.json(contact);
})

route.post('/contact',async (req,res)=>{
    const newContact = await req.body
    await contactSchema.deleteOne()
    await contactSchema.create(newContact);
    res.json(newContact)
})

module.exports = route