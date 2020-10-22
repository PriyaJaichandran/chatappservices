module.exports = (sequelize, Sequelize) => {
    const Userdetails = sequelize.define("user", {
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
    });
    return Userdetails;
};