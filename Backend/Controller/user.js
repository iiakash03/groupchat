const User=require('../Models/user')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const Sequelize=require('../util/database');


const register=async (req,res)=>{
    try{
   
    const name=req.body.name;
    const email=req.body.email;
    const phone=req.body.phone;
    const password=req.body.password;

    const data=await User.findAll({
        where:{email:email}
    })

    if(data.length>0){
        return res.send('user already exist');
    }else{
        bcrypt.hash(password,10,async(err,hash)=>{
            console.log(err)
            await User.create({
                name,
                email,
                phone,
                password:hash
            })
            .then(result=>{
                res.json("successfullly registered")
            })
            .catch(err=>{
                console.log(err);
            })
        })

    }
}catch(err){
    
    console.log(err)
    res.send("some error occured")
}
}

const login=async (req,res)=>{
    try{
    const email=req.body.email;
    const password=req.body.password;

    const data=await User.findAll({
        where:{email:email}
    })

    if(data){
        bcrypt.compare(password,data[0].password,(err,result)=>{
            if(result){
                return res.send({status:"logged",token:generateAccessToken(data[0].id,data[0].name)})
            }else{
                return res.send("password incorrect");
            }
        })
    }else{
        return res.send("user not found");
    }
}catch(err){
    res.send(err)
}
}

const getUsers=async (req,res,next)=>{
    const users=await User.findAll();
    res.send(users)
}

function generateAccessToken(id,name){
    return jwt.sign({userId:id,name:name},'secretkey');
}

module.exports={
    register,
    login,
    getUsers
}