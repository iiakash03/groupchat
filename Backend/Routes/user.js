const express=require('express')
const router=express.Router();
const userController=require('../Controller/user');

router.post('/register',userController.register)

module.exports=router;