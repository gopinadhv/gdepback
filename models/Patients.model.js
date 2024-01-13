"use strict";

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define("Patients", {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    },
    healthCardNo: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    problem: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    symptoms: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    sugar: {
      type: DataTypes.STRING(5),
      allowNull: true,
    },
    bp: {
      type: DataTypes.STRING(5),
      allowNull: true,
    },
    fever: {
      type: DataTypes.STRING(5),
      allowNull: true,
    },
    status: {
      type: DataTypes.TINYINT(1),
      allowNull: true,
    },
    doctorId: {
      type: DataTypes.STRING(20),
      allowNull: true,
      references: {
        model: "Users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bloodGroup: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  Model.associate = function (models) {
    Model.belongsTo(models.Users, {
      foreignKey: "userId",
      as: "users",
      constraints: false,
    });
  };

  Model.prototype.toWeb = function (pw) {
    let json = this.toJSON();
    return json;
  };

  return Model;
};
