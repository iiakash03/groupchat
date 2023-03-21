const express=require('express')
const app=express();
const Sequelize=require('./Backend/util/database');
const bodyParser=require('body-parser')
const cors=require('cors');

const userRoutes=require('./Backend/Routes/user')
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use('/user',userRoutes);



app.listen(3000);