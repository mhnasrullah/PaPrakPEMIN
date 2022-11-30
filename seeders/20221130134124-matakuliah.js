'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('matakuliahs', [
      {
      nama: 'Pemrograman Dasar',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      nama: 'Pemrograman Lanjut',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      nama: 'Algoritma dan Struktur Data',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      nama: 'Sistem Basis Data',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      nama: 'Jaringan Komputer Dasar',
      createdAt: new Date(),
      updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('matakuliahs', null, {});
  }
};
