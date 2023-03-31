const express=require('express')
const router=express.Router();
const authorization=require('../middleware/auth')
const groupController=require('../Controller/group')

router.post('/addgroup',authorization.authenticate, groupController.saveGroup)

router.post('/getgroup',authorization.authenticate,groupController.getgroup)

router.post('/admincontrol',authorization.authenticate,groupController.admin)

router.get('/getGroupbyId/:groupid',groupController.getgroupbyId)

router.post('/updategroup',authorization.authenticate,groupController.updateGroup)

module.exports=router;