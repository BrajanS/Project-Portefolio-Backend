const express = require('express');
const { mongoose } = require('mongoose');
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
const cors = require('cors')

const contactRouter = require('./routes/contactRoute')
const compRouter = require('./routes/competencesRoute')
const langRouter = require('./routes/languesRoute')
const centreInteretsRouter = require('./routes/centreInteretsRoute')
const expProRouter = require('./routes/experienceProRoute')
const formationRouter = require('./routes/formationRoute')

app.use(cors())
mongoose.connect(process.env.DB,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("Connexion DB réussi: ",process.env.DB);
})
.catch((error)=>{
    console.log(error);
})

app.listen(PORT,()=>{
    console.log(`Server open in: http://localhost:${PORT}`);
})
app.get('/',(req,res)=>{
    res.json({message: "Gotten /, Welcome to the main page"})
})
app.get('/message',(req,res)=>{
    res.json({message: "Bonjour, voici votre premiere route"})
})

app.use(express.json())
//--------Routes categories--------------------
app.use('',contactRouter)
app.use('',compRouter)
app.use('',langRouter)
app.use('',centreInteretsRouter)
app.use('',expProRouter)
app.use('',formationRouter)