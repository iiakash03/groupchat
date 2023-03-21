const sequelize=require('../util/database');
const Sequelize=require('sequelize');
const data=sequelize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },

    name:Sequelize.STRING,
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    phone:Sequelize.STRING,
    password:{
        type:Sequelize.STRING,
        allowNull:false
    },
    
})

module.exports=data;