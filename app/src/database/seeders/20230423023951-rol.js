'use strict';


let tiposDeRol = ["admin","user"]

let rolesMapeados = tiposDeRol.map((roles) => {
  let rol = {
    name: roles,
    createdAt: new Date,
    updatedAt: new Date
  }
  return rol
})

/** @type {import('sequelize-cli').Migration} */



module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('rols', rolesMapeados, {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('rols', null, {});
  }
};
