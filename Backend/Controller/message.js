const User=require('../Models/message')

const savemessage=(req,res)=>{
    const userId=req.user.id;
    const message=req.body.message

    obj={
        message,
        userId
    }

    User.create({
        message,
        userId
    })    
}

const getmessages=async (req,res)=>{
    const message=await User.findAll({
        attributes:['message']
    })

    res.send(message);
}

module.exports={
    savemessage,getmessages
}