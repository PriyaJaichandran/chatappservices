const dbparams=require('./constants/dbprops');
const sequelize = new Sequelize(dbparams.CONNECTION_URL);
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  module.exports=sequelize;