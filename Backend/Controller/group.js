const Group=require('../Models/group');
const user_group = require('../Models/usergroup');
const User=require('../Models/user')
const { Op } = require('sequelize');


const getgroup=async (req,res,next)=>{
    const group=await req.user.getGroups()
    res.send(group);
}


const saveGroup=async (req,res,next)=>{
    const group=req.body;

    console.log(group)
    const gr=await Group.create({
        groupname:group.gn
    })

    let userid= req.body.values


    console.log(userid)

    

    const users=await User.findAll({
        where:{
            id:{
                [Op.in]:userid
            }
        }
    })
    console.log(users);

    gr.addUsers(users)

    res.send("ok")
    
}

module.exports={
    saveGroup,
    getgroup
}