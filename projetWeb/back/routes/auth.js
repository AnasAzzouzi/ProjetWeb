const router=require('express').Router();
const bcrypt= require('bcryptjs');
let UserSchema= require('../Models/User');
const jwt= require('jsonwebtoken');



router.post('/register',async (req,res,next)=>{

    // checking if the email already exits

    const emailExist= await UserSchema.findOne({email:req.body.email})
    if(emailExist) return res.status(400).send("Exists");
    
    //Hashing pw
    const salt= await bcrypt.genSalt(10);
    const hashed= await bcrypt.hash(req.body.pw,salt)
    const User = new UserSchema({
        name:req.body.name,
        email:req.body.email,
        pw:hashed,
        profil:req.body.profil

    })

       
   await UserSchema.create(User,(error,data)=>{
        
        if(error){
            return next(error);
        }
        else{
            res.json(data)
        }
    })
    
})

//LOGIN
router.post('/login', async (req,res)=>{

   
    const User= await UserSchema.findOne({email:req.body.email})
    
    if(!User) return res.status(400).send('Not Found');
    const validPass=await bcrypt.compare(req.body.pw,User.pw);
    if(!validPass) return res.status(400).send('Not Found');
    //create and assign a token 

    const token=jwt.sign({User},process.env.token_secret)

    res.header('auth-token',token).cookie('User',User.name)
    const username=User.name;
    const profil=User.profil;
    res.json({username:username,profil:profil});
 


})


module.exports=router;