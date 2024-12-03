'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      // One to Many: Satu user memiliki banyak presensi
      user.hasMany(models.presensi, {
        foreignKey: 'userID', // foreign key di tabel presensi
        as: 'presensi' // alias untuk relasi
      })
    }
  }
  user.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};