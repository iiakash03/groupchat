const { where } = require('sequelize');
const Message=require('../Models/message')
const User=require('../Models/user')
const Group=require('../Models/group')

const savemessage=async (req,res)=>{
    try{
    const t=await sequelize.transaction();
    const userid=req.user.id
    const message=req.body.message
    const groupid=req.body.gid

    const group=await Group.findByPk(groupid)

    const user=await User.findByPk(req.user.id)
    .then(user=>{
        if(!user){

        }else{
            user.createMessage({
                message:message
            })
            .then(data=>{
                data.setGroup(group)
                t.commit()
            })
        }
    })
}catch(err){
    res.send("some error occured")

    }
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