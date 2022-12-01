'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Mahasiswa_matakuliahs', {
      // id: {
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      //   type: Sequelize.INTEGER
      // },
      mhsNim: {
        primaryKey: true,
        allowNull:false,
        type: Sequelize.STRING,
        references: {
          model:'Mahasiswas',
          key:'nim',
        }
      },
      mkId: {
        primaryKey: true,
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {
          model:'Matakuliahs',
          key:'id',
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Mahasiswa_matakuliahs');
  }
};