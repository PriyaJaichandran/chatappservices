const dbconfig=require('../config/dbconfig');
const User=require('../models/Userdetails');
const app=require('../app');

var UserService = require('../services/UserService')    

exports.getUsers = async function (req, res, next) {
    try {
        var users = await UserService.getUsers(req,res)
        return res.status(200).json({ status: 200, data: users, message: "Returned users successfully" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}