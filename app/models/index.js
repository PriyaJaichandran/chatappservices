const dbparams=require('../constants/dbprops');
const Sequelize = require('sequelize')
const sequelize = new Sequelize(dbparams.PROD_CONNECTION_URL)

const db= {};

db.sequelize=sequelize;
db.Sequelize=Sequelize;

db.userdetails=require("./Userdetails")(sequelize,Sequelize);

module.exports=db;
