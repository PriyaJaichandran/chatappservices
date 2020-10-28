module.exports = (sequelize, Sequelize) => {
    const Loginuser = sequelize.define("loginuser", {
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING
        },
        auth_token: {
            type: Sequelize.STRING
        },
        available_status: {
            type: Sequelize.STRING
        }
    },{
        freezeTableName: true
    });
    return Loginuser;
};