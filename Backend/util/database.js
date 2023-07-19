const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.POSTGRES_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true, // This will require SSL/TLS for the connection
      rejectUnauthorized: false, // You may need to set this to false if you encounter certificate issues
    },
  },
});

module.exports = sequelize;
