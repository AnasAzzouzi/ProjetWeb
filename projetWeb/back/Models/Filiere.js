const mongoose=require('mongoose');
const Schema = mongoose.Schema;
let FiliereSchema= new Schema(
    {   
        nom:{type:String},
        departement:{type:String},

    }   
)
module.exports=mongoose.model('Filieres',FiliereSchema);

