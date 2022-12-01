'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mahasiswa_matakuliah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Matakuliah.belongsToMany(models.Mahasiswa, {
        through: 'Mahasiswa_matakuliah',
        foreignKey: 'mkId'
      })
      models.Mahasiswa.belongsToMany(models.Matakuliah, {
        through: 'Mahasiswa_matakuliah',
        foreignKey: 'mhsNim'
      })
      models.Matakuliah.sync()
      models.Mahasiswa.sync()
      models.Mahasiswa_matakuliah.sync()
    }
  }
  Mahasiswa_matakuliah.init({
    mhsNim: DataTypes.INTEGER,
    mkId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Mahasiswa_matakuliah',
  });
  return Mahasiswa_matakuliah;
};