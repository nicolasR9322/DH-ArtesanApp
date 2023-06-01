'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SliderBanner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SliderBanner.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SliderBanner',
  });
  return SliderBanner;
};