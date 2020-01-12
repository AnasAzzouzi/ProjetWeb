const mongoose= require('mongoose')
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name:{
        type:String,
        required:true,
        min:6
    },
    email :{
        type:String,
        required:true,
        min :6,

    },
    pw:{
        type:String,
        required:true,
        min :6,
        max:1024
    },
    profil:{
        type:String,
        required:true,
        min :4,
        max:1024

    }
})
module.exports=mongoose.model('Users',UserSchema);