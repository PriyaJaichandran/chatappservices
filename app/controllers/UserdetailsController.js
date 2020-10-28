const {
    userdetails
} = require('../models');
const db = require('../models');
const Op = db.Sequelize.Op;
const Userdetails = db.userdetails;
const cipherKey = require('../utils/CipherKey');
const jwt = require("jsonwebtoken")
const jwtKey = "my_secret_key"
const jwtExpirySeconds = 300
var message;
//Create Userdetails
exports.create = (req, res) => {
    let userPwd = req.body.password;
    
    const userdetails = {
        user_name: req.body.user_name,
        password: req.body.password,
        email: req.body.email
    };
    Userdetails.create(userdetails)
        .then(data => {
            return res.status(200).json({
                status: 200,
                data: data,
                message: "USER CREATED"
            });
        })
        .catch(err => {
            return res.status(400).json({
                status: 400,
                message: err.message
            });
        });
}
//Get all user details by id
exports.findAll = (req, res) => {
    const email = req.params.email;
    Userdetails.findAll({
            where: {
                email: {
                    [Op.notIn]: [email]
                }
            }
        })
        .then(data => {
            return res.status(200).json({
                status: 200,
                data: data,
                message: "USERS LIST RETURN SUCCESS"
            });
        })
        .catch(err => {
            return res.status(400).json({
                status: 400,
                message: err.message
            });
        });
};
//Get all user details by id
exports.findById = (req, res) => {
    const userId = req.params.id;
    Userdetails.findAll({
            where: {
                id: userId
            }
        })
        .then(data => {
            return res.status(200).json({
                status: 200,
                data: data,
                message: "Successfully user sigin in"
            });
        })
        .catch(err => {
            return res.status(400).json({
                status: 400,
                message: err.message
            });
        });
};
//Get userdetails by Id
exports.findById = (req, res) => {
    const userId = req.params.id;
    Userdetails.findAll({
            where: {
                id: userId
            }
        })
        .then(data => {
            return res.status(200).json({
                status: 200,
                data: data,
                message: "Successfully user sigin in"
            });
        })
        .catch(err => {
            return res.status(400).json({
                status: 400,
                message: err.message
            });
        });
};
exports.findByEmail = (req, res) => {
    const email = req.params.id;
    Userdetails.findAll({
            where: {
                email: email
            }
        })
        .then(data => {
            console.log(data);
            if (data.email === email) {
                message = "USER FOUND"
            } else {
                message = "USER NOT FOUND"
            }
            return res.status(200).json({
                status: 200,
                data: data,
                message: message
            });
        })
        .catch(err => {
            return res.status(400).json({
                status: 400,
                message: err.message
            });
        });
};
//Signin user details
exports.signinUser = (req, res) => {
    const userdetails = {
        password: req.body.password,
        email: req.body.email
    };

    Userdetails.findOne({
            where: {
                email: userdetails.email
            }
        })
        .then(data => {
            if (data.email === userdetails.email) {
                
                if (data.password === userdetails.password) {
                    message = "VALID PASSWORD"
                } else {
                    message = "INVALID PASSWORD"
                }
            } else {
                message = "INVALID EMAIL"
            }
            return res.status(200).json({
                status: 200,
                data: data,
                message: message
            });
        })
        .catch(err => {
            return res.status(400).json({
                status: 400,
                message: err.message
            });
        });
};