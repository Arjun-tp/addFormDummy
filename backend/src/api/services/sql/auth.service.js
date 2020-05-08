const mysqldb = require("../../../config/sequelize");
const User = mysqldb.User;
const logger = require("../../utils/logger");
const model = "[user.model]";


exports.createUser = async query => {
    const methodName = "[createUser]";
    try {
        return User.create(query)
    } catch (error) {
        logger.error(model, methodName, error);
        return false;
    }
};

exports.getAllUsers = async query => {
    const methodName = "[getAllUsers]";
    try {
        return await User.findAll({raw: true});
    } catch (error) {
        logger.error(model, methodName, error);
        return false;
    }
};

exports.getUserById = async queryParams => {
    const methodName = "[getAllUsers]";
    try {
        let query = {
            where: {
                uuid: queryParams.uuid
            }
        }
        return await User.findOne(query);
    } catch (error) {
        logger.error(model, methodName, error);
        return false;
    }
};

exports.editUser = async queryParams => {
    const methodName = "[editUser]";
    try {
        let query = {
            where: {
                uuid: queryParams.uuid
            }
        }
        let editedUser = await User.update(queryParams, query);
        return editedUser
    } catch (error) {
        logger.error(model, methodName, error);
        return false;
    }
}

exports.removeUser = async queryParams => {
    const methodName = "[removeUser]";
    try {
        let query = {
            where: {
                uuid: queryParams.uuid
            }
        }
        let removedUser = await User.destroy(query);
        return removedUser
    } catch (error) {
        logger.error(model, methodName, error);
        return false;
    }
}

