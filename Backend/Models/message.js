const sequelize=require('../util/database');
const Sequelize=require('sequelize');
const message=sequelize.define('expense',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    message:Sequelize.STRING, 
})

module.exports=message;