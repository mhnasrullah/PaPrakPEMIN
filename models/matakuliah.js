'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matakuliah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Matakuliah.belongsToMany(models.Mahasiswa,{through : 'Mahasiswa_matakuliah', foreignKey: 'matakuliahId'})
      models.Mahasiswa.belongsToMany(models.Matakuliah,{through : 'Mahasiswa_matakuliah', foreignKey: 'mahasiswaNim'})
      
    }
  }
  Matakuliah.init({
    nama: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Matakuliah',
  });
  return Matakuliah;
};