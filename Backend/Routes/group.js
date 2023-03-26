const express=require('express')
const router=express.Router();
const authorization=require('../middleware/auth')
const groupController=require('../Controller/group')

router.post('/addgroup',groupController.saveGroup)

router.post('/getgroup',authorization.authenticate,groupController.getgroup)

module.exports=router;