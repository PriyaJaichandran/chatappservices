module.exports = (sequelize, Sequelize) => {
    const Userdetails = sequelize.define("users", {
        user_name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING
        }
    },{
        freezeTableName: true
    });
    return Userdetails;
};