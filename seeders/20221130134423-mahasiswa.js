'use strict';
const bcrypt = require('bcryptjs')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('mahasiswas', [
      {
        nim: '205150700111032',
        nama: 'Mukhammad Afan Oktafianto',
        angkatan: '2020',
        password: await bcrypt.hash('12345678',10),
        prodi: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nim: '205150700111031',
        nama: 'Okta',
        angkatan: '2020',
        password: await bcrypt.hash('12345678',10),
        prodi: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('mahasiswas', null, {});
  }
};