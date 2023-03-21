const express=require('express')
const app=express();
const Sequelize=require('./Backend/util/database');
const bodyParser=require('body-parser')
const cors=require('cors');

const userRoutes=require('./Backend/Routes/user')
app.use(
    cors({
        origin:"http://127.0.0.1:5500",
    }));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use('/user',userRoutes);



Sequelize
.sync()
.then(result=>{
    app.listen(3000)
})
.catch(err=>{
    console.log(err)
})