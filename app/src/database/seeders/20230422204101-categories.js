'use strict';


let categoriasNuevas = ["comida", "artesanias","pinturas"]

let categoriasMapeadas = categoriasNuevas.map((categoria) => {
  let category = {
    name: categoria,
    createdAt: new Date,
    updatedAt: new Date
  }
  return category
})

/** @type {import('sequelize-cli').Migration} */



module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('categories', categoriasMapeadas, {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('categories', null, {});
  }
};
