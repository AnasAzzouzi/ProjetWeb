
express= require('express');
router=express.Router();
const verify=require('./verifyToken');
let MatiereSchema=require('../Models/Matiere')

//Create Matiere

router.route('/AddMatiere').post(verify,(req,res,next)=>{
    MatiereSchema.create(req.body,(error,data)=>{
        if(error){
            return next(error)
        }
        else{
            console.log(data)
            res.json(data)
        }
    })
});
// Get Matiere
router.route('/ListMatiere').get((req,res)=>{
    MatiereSchema.find((error,data)=>{
        if(error){
            return next(error)
        }
        else {
            res.json(data)
        }
    })
});
// Update Matiere
router.route('/UpdateMatiere').put(verify,(req,res,next)=>{
    MatiereSchema.findByIdAndUpdate(req.body._id,
        {$set:req.body},(error,data)=>{
            if (error) {
                return next(error);
                console.log(error)
              } else {
                res.json(data)
                console.log('Matiere updated successfully !')
              }
        })
})

//Delete Matiere

router.route('/DeleteMatiere').delete(verify,(req,res,next)=>{
    
    MatiereSchema.findByIdAndDelete(req.body._id,(error, data) => {
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