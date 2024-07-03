const express = require('express')
const formationRoute = express.Router()
const formationModel = require('../models/formationModel.js')

formationRoute.get('/formation',async (req,res)=>{
    try {
        const obtainFormations = await formationModel.find()
        res.status(200).json(obtainFormations)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        })
    }
})

formationRoute.post('/newFormation',async (req,res)=>{
    try {
        const newFormation = req.body;
        await formationModel.create(newFormation)
        res.status(200).json(newFormation)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        })
    }
})

formationRoute.delete('/delFormation/:id',async (req,res)=>{
    try {
        const {id} = req.params;
        const delFormation = await formationModel.findByIdAndDelete(id)
        if(!delFormation){
            return res.status(400).json({
                message: `Pas de formation avec l'ID: ${id}`
            })
        }
        res.status(200).json(delFormation)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        })
    }
})

module.exports = formationRoute;