const express = require('express')
const route = express.Router()
const contactSchema = require('../models/contactModel.js')

route.get('/contact',async (req,res)=>{
    try{
        const contact = await contactSchema.find();
        // console.log(contact);
        res.json(contact);
    } catch (error) {
        console.log(error.message);
        if(error){
            res.status(500).json({
                message: error.message
            })
        }
    }
})

route.post('/contact',async (req,res)=>{
    try{
        const newContact = await req.body
        await contactSchema.deleteOne()
        await contactSchema.create(newContact);
        res.json(newContact)
    } catch (error) {
        console.log(error.message);
        if(error){
            res.status(500).json({
                message: error.message
            })
        }
    }
})

module.exports = route