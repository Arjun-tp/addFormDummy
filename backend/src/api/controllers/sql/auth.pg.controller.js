const httpStatus = require("http-status");
const logger = require("../../utils/logger");
const mysqldb = require("../../../config/sequelize");
const User = mysqldb.User;
const controller = "[auth.pg.controller]";
const authService = require("../../services/sql/auth.service");



exports.getAllUsers = async (req, res, next) => {
    const methodName = "[getAllUsers]";
    try {
        let getUsers = await authService.getAllUsers()
        if (getUsers) {
            console.log('getUsers===>', JSON.stringify(getUsers));
            res.json(getUsers)
        }
    } catch (error) {
        logger.error(controller, methodName, error);
        return error;
    }
};

exports.getUserById = async (req, res, next) => {
    const methodName = "[getUserById]";
    try {
        let getUser = await authService.getUserById(req.params)
        if (getUser) {
            console.log('getUser===>', getUser.dataValues);
            res.json(getUser)
        }
    } catch (error) {
        logger.error(controller, methodName, error);
        return error;
    }
};


exports.editUser = async (req, res, next) => {
    const methodName = "[editUser]";
    try {
        let editedUser = await authService.editUser(req.body)
        if (editedUser) {
            res.json(editedUser)
        }
    } catch (error) {
        logger.error(controller, methodName, error);
        return error;
    }
}

exports.deleteUser = async (req, res, next) => {
    const methodName = "[deleteUser]";
    try {
        let removedUser = await authService.removeUser(req.params)
        if (removedUser) {
            res.json(removedUser)
        }
    } catch (error) {
        logger.error(controller, methodName, error);
        return error;
    }
}

exports.addUser = async (req, res, next) => {
    // To Postman
    /*{
        "customerName": "arjun",
        "customerPhoneNumber": "+916373637834",
        "eventName": "Cricket Tournament",
        "eventDescription": "Cricket Cricket Cricket",
        "eventDate": "2020-04-04", //ISO format
        "eventLocation": "Mumbai",
        "referenceFiles": ""
    }*/
    const methodName = "[addUser]";
    try {
        let addUser = await authService.createUser(req.body)
        if (addUser) {
            res.json(addUser)
        }
    } catch (error) {
        logger.error(controller, methodName, error);
        return error;
    }
};



