'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Mahasiswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // console.log(models.Mahasiswa,"models associate")
      models.Mahasiswa.belongsTo(models.Prodi,{foreignKey : 'prodi'})
    }
  }
  Mahasiswa.init({
    nim: {
      type : DataTypes.STRING,
      primaryKey : true
    },
    nama: DataTypes.STRING,
    angkatan: DataTypes.STRING,
    password: DataTypes.STRING,
    prodi: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Mahasiswa',
  });
  return Mahasiswa;
};