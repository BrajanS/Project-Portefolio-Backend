const express = require('express');
const { mongoose } = require('mongoose');
require('dotenv').config()
const PORT = process.env.PORT || 4000;
const app = express()
const cors = require('cors')
const axios = require('axios')

const contactRouter = require('./routes/contactRoute')
const compRouter = require('./routes/competencesRoute')
const langRouter = require('./routes/languesRoute')
const centreInteretsRouter = require('./routes/centreInteretsRoute')
const expProRouter = require('./routes/experienceProRoute')
const formationRouter = require('./routes/formationRoute')

app.use(cors())
//-------------Connexion to the Database----------------\\
mongoose.connect(process.env.DB)
.then(()=>{
    console.log("Connexion DB réussi: ",process.env.DB);
})
.catch((error)=>{
    console.log(error);
})
//-------------------------------------------------------//
app.listen(PORT,()=>{
    console.log(`Server open in: http://localhost:${PORT}`);
})
app.get('/',(req,res)=>{
    res.json({message: "Gotten /, Welcome to the main page"})
})
app.get('/message',(req,res)=>{
    res.json({message: "Bonjour, voici votre premiere route"})
})
app.get("/meteo", async (req, res) => {
    const apiKey = process.env.meteo_api;
    const ville = req.query.city;
    const meteoURL = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&units=metric&appid=${apiKey}`;
  
    try {
      const response = await axios.get(meteoURL);
      const meteo = response.data;
      res.json({ meteo });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

app.use(express.json())
//--------Routes categories--------\\
app.use('',contactRouter)
app.use('',compRouter)
app.use('',langRouter)
app.use('',centreInteretsRouter)
app.use('',expProRouter)
app.use('',formationRouter)