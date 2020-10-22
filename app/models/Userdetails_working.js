module.exports = (sequelize, Sequelize) => {
    const Userdetails = sequelize.define("userdetails", {
        firstName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING
        },
        phoneno: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        }
    });
    return Userdetails;
};