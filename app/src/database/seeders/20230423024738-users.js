'use strict';

let usersJson = require("../../olddatabase/users.json");

let newUsers = usersJson.map((user) =>{
let usuario = {
  name: user.first_name,
  email:user.email,
  pass:user.password,
  avatar:user.image,
  rolId: 2,
}
return usuario;

})

/** @type {import('sequelize-cli').Migration} */


module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('users',newUsers, {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('users', null, {});
  }
};
