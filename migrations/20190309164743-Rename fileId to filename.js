'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Photos', 'fileId', 'filename');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Photos', 'filename', 'fileId');
  }
};
