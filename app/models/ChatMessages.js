module.exports = (sequelize, Sequelize) => {
    const Chatmessages = sequelize.define("chatmessages", {
        user_id: {
            type: Sequelize.INTEGER
        },
        recepient_id: {
            type: Sequelize.INTEGER,
        },
        message: {
            type: Sequelize.STRING
        },
    },{
        freezeTableName: true
    });
    return Chatmessages;
};