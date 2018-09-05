'use strict';

const {NotificationStatus, NotificationType} = require('../constants');
const _ = require('lodash');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Notifications', {
      id: {type: Sequelize.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true},
      content: {type: Sequelize.TEXT, allowNull: false},
      createdBy: {type: Sequelize.BIGINT, allowNull: false},
      status: {
        type: Sequelize.ENUM,
        allowNull: false,
        defaultValue: NotificationStatus.New,
        values: _.values(NotificationStatus),
      },
      userId: {type: Sequelize.BIGINT, allowNull: false},
      type: {
        type: Sequelize.ENUM,
        allowNull: false,
        values: _.values(NotificationType),
      },
      subType: {type: Sequelize.STRING},
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Notifications');
  }
};
