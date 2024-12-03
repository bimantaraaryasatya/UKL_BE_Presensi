'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class presensi extends Model {
    static associate(models) {
      // Many to One: Banyak Presensi terkait dengan satu user
      presensi.belongsTo(models.user, {
        foreignKey: 'userID',
        as: 'user'
      })
    }
  }
  presensi.init({
    userID: DataTypes.INTEGER,
    date: DataTypes.DATE,
    time: DataTypes.TIME,
    status: DataTypes.ENUM('hadir', 'izin', 'sakit', 'alpha')
  }, {
    sequelize,
    modelName: 'presensi',
  });
  return presensi;
};