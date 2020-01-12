const express= require('express');
const app= express();
const mongoose = require('mongoose')
const dotenv= require('dotenv');
const cors= require('cors')
var cookieParser = require('cookie-parser');

dotenv.config();
app.use(cors());
app.use(cookieParser());



//Routes 

const EtudiantRoute=require('./routes/Etudiant.route');
const ProfRoute= require('./routes/Prof.route');
const FiliereRoute= require('./routes/Filiere.route');
const MatiereRoute= require('./routes/Matiere.route');
const DepartementRoute= require('./routes/Departement.route')
const NoteRoute= require('./routes/Note.route')
const authRoute=require('./routes/auth');


mongoose.Promise=global.Promise;
//process.env.db_connect
mongoose.connect('mongodb://localhost:27017/prjtweb',{useNewUrlParser:true , useUnifiedTopology: true },
()=>console.log('connected to db '));
app.use(express.json());

app.use('/api/Etudiant',EtudiantRoute)
app.use('/api/Professeur',ProfRoute)
app.use('/api/Filiere',FiliereRoute)
app.use('/api/Matiere',MatiereRoute)
app.use('/api/Departement',DepartementRoute)
app.use('/api/Note',NoteRoute)
app.use('/api/user',authRoute);



app.listen(3001,()=>console.log('Server Running !'));