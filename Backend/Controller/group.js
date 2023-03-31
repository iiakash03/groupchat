const Group=require('../Models/group');
const user_group = require('../Models/usergroup');
const User=require('../Models/user')
const { Op } = require('sequelize');
const Usergroup=require('../Models/usergroup')
const sequelize=require('../util/database');

const updateGroup = async (req, res, next) => {
    try {
    const t=await sequelize.transaction();
      const group = await Group.findByPk(req.body.groupid);
      group.groupname = req.body.gn;
      await group.save();
  
      const userIds = req.body.values;
      const users = await User.findAll({
        where: {
          id: {
            [Op.in]: userIds
          }
        }
      });
  
      await group.setUsers(users);

      t.commit();
  
      res.send("ok");
    } catch (err) {
        t.rollback()
        console.log(err)
    }
  };



const admin=async (req,res,next)=>{
    try{
    console.log('entefvvdfvdf')
   const admin= await user_group.findAll({
    where: {
        [Op.and]: [
          { userId: req.user.id },
          { groupId: req.body.gid}
        ]
      }
    }
    )
    res.send(admin)
}catch(err){
    res.send("some error occured")
}
}


const getgroup=async (req,res,next)=>{
    try{
    const group=await req.user.getGroups()
    res.send(group);
    }catch(err){
        res.send("so0me error occured")
    }
}


const getgroupbyId=async (req,res,next)=>{
    try{
    const group=await Group.findAll({
        where:{id:req.params.groupid}
    })
    console.log(group)
    res.send(group)
}catch(err){
    res.send(err)
}
}


const saveGroup=async (req,res,next)=>{
    try{
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

    await gr.addUsers(users)

    await Usergroup.update({
        isAdmin:true
    },
    {
        where:{userId:req.user.id,groupId:gr.dataValues.id}
    }
    )

    res.send("ok")
}catch(err){
    res.send("some error occured")
}
    
}

module.exports={
    saveGroup,
    getgroup,admin,
    getgroupbyId,
    updateGroup
}