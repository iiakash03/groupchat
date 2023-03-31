const express=require('express')
const router=express.Router();
const messageController=require('../Controller/message');
const authorization=require('../middleware/auth')

router.post('/savemessage',authorization.authenticate,messageController.savemessage)

router.get('/getindexmessage',messageController.getindex)

router.get('/getmessage',messageController.getmessages)

router.get('/getGroupMessage',messageController.getgroupmessage)



module.exports=router;
