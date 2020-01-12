const mongoose=require('mongoose');
const Schema = mongoose.Schema;
let MatiereSchema= new Schema(
    {  
        nom:{type:String},
        filiere:{type:String},

    }    
)
module.exports=mongoose.model('Matieres',MatiereSchema);

