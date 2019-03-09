'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define(
    'Photo',
    {
      sourceId: DataTypes.STRING,
      timestamp: DataTypes.DATE,
      latitude: DataTypes.FLOAT,
      longitude: DataTypes.FLOAT,
      fileId: DataTypes.STRING
    },
    {}
  );
  Photo.associate = function(models) {
    // associations can be defined here
  };
  return Photo;
};
