const Enum = require('../../../config/constants');

module.exports = function (sequelize, DataTypes) {
    const Op = sequelize.Op;
    const User = sequelize.define('User', {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            unique: true,
        },
        customerName: {
            type: DataTypes.STRING,
            trim: true,
            validate: {
                len: [1, 128],
            },
            required: true
        },
        customerPhoneNumber: {
            type: DataTypes.STRING,
            allowNull:true,
            required: true
        },
        eventName: {
            type: DataTypes.STRING,
            lowercase: true,
            trim: true,
            required: true
        },
        eventDescription: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [8, 128],
            },
            required: true
        },
        eventDate: {
            type: DataTypes.DATE,
            trim: true,
            allowNull:true,
            required: true
        },
        eventLocation: {
            type: DataTypes.STRING,
            trim: true,
            required: true
        },
        referenceFiles: {
            type: DataTypes.STRING,
            trim: true,
        }
    });
    return User;
};
