const express = require('express');
const router = express.Router();
const User = require('../models/User') ;
const {body , validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SECRET = "thisisujjawal";
const verifyToken = require('../middleware/verifyToken');

router.post('/signup' ,[
    body('name',"Name should have atleast 5 characters").isLength({min : 5}),
    body('password', 'Password too small').isLength({min : 5}),
    body('email' , "Please enter a valid Email").isEmail()
] ,async (req,res)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error : true , msg : error.array()});
    }
    try {
        const check = await User.findOne({email : req.body.email});
        if(check){
            return res.status(400).json({error : true, msg : `User with ${req.body.email} already exists`, user : check})
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password , salt);
        const data = {...req.body , password : hashedPassword};
        const user = await User.create(data);
        const token = jwt.sign({id : user._id} , SECRET);
        console.log(user);
        console.log(token);
        res.status(200).json({name : user.name, email : user.email,token});
    } catch (error) {
        console.log(error);
        res.status(500).json({error :true , msg: error.message});
    }
})

router.post('/login' ,[
    body('password', 'Password cannot be blank').isLength({min : 1}),
    body('email' , "Please enter a valid Email").isEmail()
] ,async (req, res)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error : error.array()});
    }
    try {
        const user = await User.findOne({email : req.body.email});
        if(!user){
            return res.status(400).json({error : true , msg : 'Invalid Credentials'})
        }
        const isPasswordCorrect = await bcrypt.compare(req.body.password , user.password);
        if(isPasswordCorrect){
            const token = jwt.sign({id : user._id} , SECRET);
            return res.status(200).json({name : user.name, email : user.email ,token});
        }else{
            return res.status(400).json({error : true , msg : "Invalid Credentials"})
        }
    } catch (error) {
        res.status(400).json({error: true, msg: error.message});
    }
})

router.get('/getuser' , verifyToken,async(req, res)=>{
    try {
        const user = await User.findById(req.userId).select('-password');
        res.status(200).json({user});
        
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
})

module.exports = router;