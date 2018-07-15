'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(function (t) {
      const postTables = ['Badges', 'Photos', 'Stories', 'Testimonials'];
      let migrations = [];

      postTables.forEach(function(table) {
        migrations.push(queryInterface.addColumn(
          table,
          'saluteCount',
          { type: Sequelize.BIGINT, allowNull: false, defaultValue: 0 },
          { transaction: t }
        ));

        migrations.push(queryInterface.addColumn(
          table,
          'shareCount',
          { type: Sequelize.BIGINT, allowNull: false, defaultValue: 0 },
          { transaction: t }
        ));
      });

      return Promise.all(migrations);
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(function (t) {
      const postTables = ['Badges', 'Photos', 'Stories', 'Testimonials'];
      let migrations = [];

      postTables.forEach(function(table) {
        migrations.push(queryInterface.removeColumn(table, 'saluteCount'), { transaction: t });
        migrations.push(queryInterface.removeColumn(table, 'shareCount'), { transaction: t });
      });

      return Promise.all(migrations);
    });
  }
};
