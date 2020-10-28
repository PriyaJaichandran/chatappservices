const dbparams=require('../constants/dbprops');
const Sequelize = require('sequelize')

const sequelize = new Sequelize(dbparams.PROD_CONNECTION_URL, {
    dialect: 'postgres',
    dialectOptions: {
      ssl: true
    }
  });
//const sequelize = new Sequelize(dbparams.CONNECTION_URL)

const db= {};

db.sequelize=sequelize;
db.Sequelize=Sequelize;

db.userdetails=require("./Userdetails")(sequelize,Sequelize);
db.login=require("./Loginuser")(sequelize,Sequelize);
db.chatmessages=require("./ChatMessages")(sequelize,Sequelize);
module.exports=db;
