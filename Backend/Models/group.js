const sequelize=require('../util/database');
const Sequelize=require('sequelize');
const data=sequelize.define('group',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },

    groupname:Sequelize.STRING,


    
})

module.exports=data;