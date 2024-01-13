"use strict";

module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('Tnc_Users', {

        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        passwordTC: {
            type: DataTypes.STRING,
            allowNull: false
        },
        passwordDateTime: {
            type: DataTypes.DATE,
            allowNull: false
        },
        // 2 - direct clint, 1 - brocker
        clientType: { type: DataTypes.TINYINT(1), allowNull: true, },
        //  0 - not send , 1 - email send , 2 - password sent, 3 -password verification success
        isEmailSent: { type: DataTypes.TINYINT(1), allowNull: true, defaultValue: 0 },

    });

    Model.associate = function (models) {

        Model.hasOne(models.Tnc_UserEmails, {
            foreignKey: "userId",
            as: "user",
            constraints: false
        });

        Model.hasMany(models.Tnc_clients, {
            foreignKey: "userId",
            as: "clints",
            constraints: false
        });

    }

    Model.prototype.toWeb = function (pw) {
        let json = this.toJSON();
        return json;
    };

    return Model;
};
