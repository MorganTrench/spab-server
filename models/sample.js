'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sample = sequelize.define('Sample', {
    sourceId: DataTypes.STRING,
    timestamp: DataTypes.DATE,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    temperature: DataTypes.FLOAT
  }, {});
  Sample.associate = function(models) {
    // associations can be defined here
  };
  return Sample;
};