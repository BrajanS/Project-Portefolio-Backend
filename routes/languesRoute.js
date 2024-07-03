const express = require('express')
const langRoute = express.Router()
const languesSchema = require('../models/languesModel.js')

langRoute.get('/langues',async (req,res)=>{
    const langues = await languesSchema.find();
    console.log(langues);
    res.json(langues);
})

langRoute.post('/newLangues',async (req,res)=>{
    try {
        const newLang = req.body;
        await languesSchema.create(newLang);
        console.log(newLang);
        res.json(newLang)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        })
    }
})

langRoute.delete('/delLangues/:id',async (req,res)=>{
    const {id} = req.params
    await languesSchema.findByIdAndDelete(id)
    res.json({
        message: id
    })
})

module.exports = langRoute