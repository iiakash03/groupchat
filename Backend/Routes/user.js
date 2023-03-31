const express=require('express')
const router=express.Router();
const userController=require('../Controller/user');

router.post('/register',userController.register)

router.post('/login',userController.login)

router.get('/getUsers',userController.getUsers)

module.exports=router;