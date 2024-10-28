import express from 'express';
const {register,login}=require('../Controllers/Auth.js');

const router=express.Router();

router.post('/register',register)
router.post('/login',login)


module.exports=router;
