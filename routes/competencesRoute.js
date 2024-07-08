const express = require('express')
const competencesRoute = express.Router()
const competencesModel = require('../models/competencesModel.js')

competencesRoute.get('/competences',async (req,res)=>{
    try {
        const competences = await competencesModel.find();
        res.json(competences);        
    } catch (error) {
        console.log(error.message);
        if(error){
            res.status(500).json({
                message: error.message
            })
        }
    }
})

competencesRoute.post('/newCompetences',async (req,res)=>{
    try {
        const body = await req.body;
        await competencesModel.create(body)
        res.json(body)
    } catch (error) {
    console.log(error.message);
    if(error){
        res.status(500).json({
            message: error.message
        })
    }
}
})

competencesRoute.delete('/delCompetences/:id',async (req,res)=>{
    try {
        const {id} = req.params;
        const compDel = await competencesModel.findByIdAndDelete(id)
        if(!compDel){
            return res.status(400).json({
                message: `Pas de compétence avec l'ID: ${id}`
            })
        }
        res.status(200).json(compDel)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        })
    }
    
})

module.exports = competencesRoute