const mongoose=require('mongoose');
const Schema = mongoose.Schema;
let ProfesseurSchema=new Schema (
{
nom :{type:String},
prenom :{type : String},
CIN:{type:String},
CP:{type:String},
departement:{type:String}
}
)
module.exports=mongoose.model('Professeurs',ProfesseurSchema);