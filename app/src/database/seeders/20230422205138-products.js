'use strict';

let products = require("../../olddatabase/products.json");

let NewProduct = products.map((product) => {
  let producto = {
    name: product.name,
    price: product.price,
    description: product.description,
    discount: "10",
    categoriesId: 1,
    image: product.image,
    createdAt: new Date,
    updatedAt: new Date
  }

  return producto;
})



module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('products', NewProduct , {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('products', null, {});
  }
};