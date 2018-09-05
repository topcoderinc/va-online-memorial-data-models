'use strict';

const {NotificationStatus, NotificationType} = require('../constants');
const _ = require('lodash');

/*
 * Copyright (c) 2018 Topcoder, Inc. All rights reserved.
 */

/*
 * the user notification definition
 */
module.exports = (sequelize, DataTypes) => sequelize.define('Notification', {
  id: {type: DataTypes.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true},
  content: {type: DataTypes.TEXT, allowNull: false},
  createdBy: {type: DataTypes.BIGINT, allowNull: false}, // who trigger this notification
  status: {
    type: DataTypes.ENUM,
    allowNull: false,
    defaultValue: NotificationStatus.New,
    values: _.values(NotificationStatus),
  },
  userId: {type: DataTypes.BIGINT, allowNull: false}, // who will receive this notification
  type: {
    type: DataTypes.ENUM,
    allowNull: false,
    values: _.values(NotificationType),
  },
  subType: {type: DataTypes.STRING},
});
