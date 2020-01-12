const mongoose=require('mongoose');
express= require('express');
router=express.Router();
const verify=require('./verifyToken');
let EtudiantSchema=require('../Models/Etudiant')

//Create Etudiant

router.route('/AddEtudiant').post(verify,(req,res,next)=>{
    EtudiantSchema.create(req.body,(error,data)=>{
        if(error){
            return next(error)
        }
        else{
            console.log(data)
            res.json(data)
        }
    })
});
// Get Etudiants
router.route('/ListEtudiant').get((req,res)=>{
    EtudiantSchema.find((error,data)=>{
        if(error){
            return next(error)
        }
        else {
            res.json(data)
        }
    })
});
router.route('/Etudiant').get(verify,(req,res)=>{
    EtudiantSchema.findById(req.body._id,(error,data)=>{
        if(error){
            return next(error)
        }
        else {
            res.json(data)
        }
    })
});

// Update Etudiant 
router.route('/UpdateEtudiant').put(verify,(req,res,next)=>{
    EtudiantSchema.findByIdAndUpdate(req.body._id,
        {$set:req.body},(error,data)=>{
            if (error) {
                return next(error);
                console.log(error)
              } else {
                res.json(data)
                console.log('Etudiant updated successfully !')
              }
        })
})

//Delete Etudiant

router.route('/DeleteEtudiant').delete(verify,(req,res,next)=>{
    
    EtudiantSchema.findByIdAndDelete(req.body._id,(error, data) => {
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