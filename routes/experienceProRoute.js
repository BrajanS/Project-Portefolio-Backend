const express = require('express')
const experienceProRoute = express.Router()
const experienceProModel = require('../models/experienceProModel.js')

experienceProRoute.get('/expPro',async (req,res)=>{
    try {
       const readExpPro = await experienceProModel.find() 
       res.status(200).json(readExpPro)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        })
    }
})

experienceProRoute.post('/newExpPro',async (req,res)=>{
    try {
        const requestedData = req.body;
        await experienceProModel.create(requestedData)
        res.status(200).json(requestedData)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        }) 
    }
})

experienceProRoute.delete('/delExpPro/:id',async (req,res)=>{
    try {
        const {id} = req.params;
        const delExpPro = experienceProModel.findByIdAndDelete(id)
        if(!delExpPro){
            res.status(400).json({
                message: `Pas d'expérience professionnels avec l'ID: ${id}`
            })
        }
        res.status(200).json(delExpPro)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        }) 
    }
})

module.exports = experienceProRoute;