const { Sequelize } = require("sequelize/types");

const Userdetails = sequelize.define('userdetails', {

    // attributes
    
    firstName: {
    
    type: Sequelize.STRING,
    
    allowNull: false
    
    },
    
    lastName: {
    
    type: Sequelize.STRING
    
    // allowNull defaults to true
    
    },
    phoneno: {
        type:Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    }
    
    }, {
    
    // options
    
    });
    Userdetails.sync({ force: true })