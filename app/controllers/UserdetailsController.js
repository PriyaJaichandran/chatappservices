const db = require('../models');
const Userdetails = db.userdetails;
//Create Userdetails

exports.create = (req, res) => {
    const userdetails={
        user_name :req.body.user_name,
        password: req.body.password,
        email: req.body.email
    };
    console.log(userdetails);

    Userdetails.create(userdetails)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(err);
        });
}
//Get userdetails by Id
exports.findById = (req, res) => {
    const userId = req.params.id;
    Userdetails.findAll({
            where: {
                id: userId
            }
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send("Error in access data");
        });
};