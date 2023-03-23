const express=require('express')
const app=express();
const Sequelize=require('./Backend/util/database');
const bodyParser=require('body-parser')
const cors=require('cors');

const User=require('./Backend/Models/user');
const Message=require('./Backend/Models/message');

const userRoutes=require('./Backend/Routes/user')
const messageRoutes=require('./Backend/Routes/message')

app.use(
    cors({
        origin:"http://127.0.0.1:5500",
}));


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use('/user',userRoutes);
app.use('/message',messageRoutes)

User.hasMany(Message)
Message.belongsTo(User)



Sequelize
.sync()
.then(result=>{
    app.listen(3000)
})
.catch(err=>{
    console.log(err)
})