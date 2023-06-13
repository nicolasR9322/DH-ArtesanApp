'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      order.belongsToMany(models.products, {
        through: "cart",
        foreignKey: "orderId",
        otherKey: "productId",
        as: "carts",
      });

      order.belongsTo(models.Users, {
        foreignKey: "userId",
        as: "user",
      });
    }
  }
  order.init({
    date: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    status: {
      type: DataTypes.STRING,
      defaultValue: "pending",
      validate: {
        isIn: {
          args: [["pending", "completed", "canceled"]],
          msg: "Los valores validos son pending, completed o canceled",
        },
      },
    },
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};