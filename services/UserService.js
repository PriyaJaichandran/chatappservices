var User = require('../models/Userdetails')

exports.getUsers = async function (req,res) {
    const userId = req.params.userId
    try {
        const user = await User.findAll({
            where: {
                id: userId
            }
        })
        res.json({
            user
        })
    } catch (error) {
        console.error(error)
    }

}