const express = require('express')
const ciRoute = express.Router()
const ciModel = require('../models/centreInteretsModel.js')

ciRoute.get('/ci',async (req,res)=>{
    try {
        const ciObtain = await ciModel.find()
        res.status(200).json(ciObtain)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        })
    }
})

ciRoute.post('/newCi',async (req,res)=>{
    try {
        const makeData = req.body;
        await ciModel.create(makeData)
        res.status(200).json(makeData)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        })
    }
})

ciRoute.delete('/delCi/:id',async (req,res)=>{
    try {
        const {id} = req.params
        const delCi = await ciModel.findByIdAndDelete(id);
        if(!delCi){
            res.status(400).json({
                message: `Pas de Centre d'intérêt par l'id: ${id}`
            })
        }
        res.status(200).json(delCi)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        })
    }
})

module.exports = ciRoute;