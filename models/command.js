'use strict';
module.exports = (sequelize, DataTypes) => {
  const Command = sequelize.define('Command', {
    action: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    duration: DataTypes.FLOAT,
    status: DataTypes.STRING
  }, {});
  Command.associate = function(models) {
    // associations can be defined here
  };
  return Command;
};