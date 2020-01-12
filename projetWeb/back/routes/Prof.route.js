const mongoose=require('mongoose');
express= require('express');
router=express.Router();
const verify=require('./verifyToken');

let ProfSchema=require('../Models/Professeur')

//Create Prof

router.route('/AddProf').post(verify,(req,res,next)=>{
    ProfSchema.create(req.body,(error,data)=>{
        if(error){
            return next(error)
        }
        else{
            console.log(data)
            res.json(data)
        }
    })
});
// Get Profs
router.route('/ListProf').get((req,res)=>{
    ProfSchema.find((error,data)=>{
        if(error){
            return next(error)
        }
        else {
            res.json(data)
        }
    })
});
// Update Prof
router.route('/UpdateProf').put(verify,(req,res,next)=>{
    ProfSchema.findByIdAndUpdate(req.body._id,
        {$set:req.body},(error,data)=>{
            if (error) {
                return next(error);
                console.log(error)
              } else {
                res.json(data)
                console.log('Prof updated successfully !')
              }
        })
})

//Delete Prof

router.route('/DeleteProf').delete(verify,(req,res,next)=>{
    
    ProfSchema.findByIdAndDelete(req.body._id,(error, data) => {
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