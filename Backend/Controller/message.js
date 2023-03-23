const User=require('../Models/message')

const savemessage=(req,res)=>{
    const id=req.user.id;
    const message=req.body.message

    obj={
        id,
        message
    }

    User.create({
        id,
        message
    })    
}

module.exports={
    savemessage
}