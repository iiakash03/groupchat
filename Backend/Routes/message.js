const express=require('express')
const router=express.Router();
const messageController=require('../Controller/message');
const authorization=require('../middleware/auth')

router.post('/savemessage',authorization.authenticate,messageController.savemessage)

router.get('/getmessage',messageController.getmessages)

module.exports=router;
