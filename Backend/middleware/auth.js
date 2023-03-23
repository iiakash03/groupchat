const User=require('../Models/user');
const jwt=require('jsonwebtoken');

const authenticate=(req,res,next)=>{
    let token=req.header('Authorization')
    console.log(token);

 try{
    const token=req.header('Authorization')
    //console.log('token',token);
    const user=jwt.verify(token,'secretkey')
    //console.log('user>>>',user);
    User.findByPk(user.userId)
    .then(user=>{
        //console.log(user);
        req.user=user;
        next();
    })
    .catch(err=>{
        console.log(err);
        return res.status(401).json('not found user');

    })
}catch(err){
    console.log(err);
}
}

module.exports={
    authenticate
};