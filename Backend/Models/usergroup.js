const Sequelize=require('sequelize');
const sequelize=require('../util/database')

const user_group=sequelize.define('cartItem',{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  userId:Sequelize.INTEGER,
  groupId:Sequelize.INTEGER
   
})

module.exports=user_group;