const mongoose=require('mongoose');
express= require('express');
router=express.Router();
const verify=require('./verifyToken');
let FiliereSchema=require('../Models/Filiere')

//Create Filiere

router.route('/AddFiliere').post(verify,(req,res,next)=>{
    FiliereSchema.create(req.body,(error,data)=>{
        if(error){
            return next(error)
        }
        else{
            console.log(data)
            res.json(data)
        }
    })
});
// Get Filiere
router.route('/ListFiliere').get((req,res)=>{
    FiliereSchema.find((error,data)=>{
        if(error){
            return next(error)
        }
        else {
            res.json(data)
        }
    })
});
// Update Prof
router.route('/UpdateFiliere').put(verify,(req,res,next)=>{
    FiliereSchema.findByIdAndUpdate(req.body._id,
        {$set:req.body},(error,data)=>{
            if (error) {
                return next(error);
                console.log(error)
              } else {
                res.json(data)
                console.log('Filiere updated successfully !')
              }
        })
})

//Delete Prof

router.route('/DeleteFiliere').delete(verify,(req,res,next)=>{
    
    FiliereSchema.findByIdAndDelete(req.body._id,(error, data) => {
        if (error) {
          return next(error);
        } 
        else {
          res.status(200).json({
            msg: data
          })
        }
    })
})
module.exports = router;