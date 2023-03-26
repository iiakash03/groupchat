const express=require('express')
const app=express();
const Sequelize=require('./Backend/util/database');
const bodyParser=require('body-parser')
const cors=require('cors');

const User=require('./Backend/Models/user');
const Message=require('./Backend/Models/message');
const Group=require('./Backend/Models/group')
const user_group=require('./Backend/Models/usergroup')

const userRoutes=require('./Backend/Routes/user')
const messageRoutes=require('./Backend/Routes/message')
const groupRoutes=require('./Backend/Routes/group')

app.use(
    cors({
        origin:"http://127.0.0.1:5500",
}));



app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json());
app.use('/user',userRoutes);

app.use('/message',messageRoutes)

app.use('/group',groupRoutes)

User.hasMany(Message)
Message.belongsTo(User)

Group.hasMany(Message)
Message.belongsTo(Group)

Group.belongsToMany(User,{through:user_group})
User.belongsToMany(Group,{through:user_group})


Sequelize
.sync()
.then(result=>{
    app.listen(3000)
})
.catch(err=>{
    console.log(err)
})