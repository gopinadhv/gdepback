"use strict";

module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('Tnc_UserEmails', {

        userId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: "Tnc_Users",
                key: "id"
            },
            onUpdate: "CASCADE",
            onDelete: "RESTRICT"
        },
        // 0 -not send , 1 - send
        emailSent: { type: DataTypes.TINYINT(1), allowNull: true, defaultValue: 0 },
        emailSentDateTime: {
            type: DataTypes.DATE,
            allowNull: true
        },
        tcAcceptorDeclineDateTime: {
            type: DataTypes.DATE,
            allowNull: true
        },
        tcLink: {
            type: DataTypes.STRING,
            allowNull: true
        },

        // 0 - no action , 1- accept , 2 - decline 
        tcAcceptorDeclineStatus: { type: DataTypes.TINYINT(1), allowNull: true, defaultValue: 0 },
        // 1 -active 2 -inactive
        linkStatus: { type: DataTypes.TINYINT(1), allowNull: true, defaultValue: 1 },

    });

    Model.prototype.toWeb = function (pw) {
        let json = this.toJSON();
        return json;
    };

    return Model;
};
