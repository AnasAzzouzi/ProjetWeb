const mongoose=require('mongoose')
const Schema= mongoose.Schema
let DepartementSchema = new Schema(
    {
        nom:{type:String}
    }
)
module.exports= mongoose.model('Departements',DepartementSchema)