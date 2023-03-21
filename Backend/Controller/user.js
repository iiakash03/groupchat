const User=require('../Models/user')
const bcrypt=require('bcryptjs')


const register=async (req,res)=>{
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
}

module.exports={
    register
}