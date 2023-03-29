const express=require('express');
const userRouter = express.Router();
const User = require('../models/userModel.js');
userRouter.get('/', async(req, res)=>{

    try{
        const users = await User.find();
        res.json(users);
    }catch(err){
        res.status(500).json({message: err.message});
    }
})

userRouter.post('/signup', async(req, res)=>{
    const user = new User({
        name: req.body.name,
        email:req.body.email,
        password:req.body.password
    })

    try{
        const newUser = await user.save();
        res.status(201).json(newUser);
    }catch(err){
        res.status(400).json({message: err.message});
    
    }
})

userRouter.post('/login',async(req, res)=>{
    const { email, password } = req.body;
    try{
         user = await User.findOne({ email, password });
        if(user==null)
        return res.status(404).json({message: 'Cannot find user'});
    }catch(err){
        res.status(500).json({message: err.message});
    }

    res.json(user);
})

userRouter.delete('/signout',getUser, async(req, res)=>{
    try{
        await User.deleteOne({email:res.user.email});
        res.json('user signed out');
    }catch(err){
        res.json(res.user);
    }
    
})

userRouter.patch('/editprofile',getUser, async(req, res)=>{
    if(req.body.name!=null){
        res.user.name= req.body.name;
    }
    if(req.body.password != null){
        res.user.password = req.body.password;
    }

    try{
        const updatedUser = await res.user.save();
        res.json(updatedUser)
    }catch(err){
        res.json('error');
    }
})

async function getUser(req,res, next){
    const email =  req.body.email
    let user
    try{
        user = await User.findOne({email});
        if(user== null)
        return res.status(404).json({message: 'Cannot find user'});
    }catch(err){
        res.status(500).json({message: err.message});
    
    }

    res.user =user;
    next();
}
module.exports= userRouter;