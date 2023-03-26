const { where } = require('sequelize');
const Message=require('../Models/message')

const savemessage=(req,res)=>{
    const userid=req.body.id
    const message=req.body.message
    const groupid=req.body.gid

    console.log(userid)
    console.log(message)
    console.log(groupid)
}

const getindex=async (req,res)=>{
    
    const index=req.query.messageid ||5;
    console.log(index)
    const ITEMS_PER_PAGE=10;
    const message=await Message.findAll(
        {
        offset:index,
        },

        {
            attributes:['id','message']
        }
    
    )

    res.send(message)
}


const getmessages=async (req,res)=>{
    const message=await Message.findAll({
        attributes:['id','message']
    })

    res.send(message);
}

const getgroupmessage=async (req,res,next)=>{
    const groupid=req.query.groupid
    const message=await Message.findAll({
        where:{groupId:groupid}
    })

    res.send(message)
}

module.exports={
    savemessage,getmessages,getindex,getgroupmessage
}