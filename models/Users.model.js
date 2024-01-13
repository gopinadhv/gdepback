"use strict";

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define("Users", {
    firstName: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    phoneNumber: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    userType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dob: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    adress: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    marriedStatus: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    doctorType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  Model.prototype.toWeb = function (pw) {
    let json = this.toJSON();
    return json;
  };

  return Model;
};
