'use strict';

/*
 * Copyright (c) 2018 Topcoder, Inc. All rights reserved.
 */
const _ = require('lodash');
const { Statuses } = require('../constants');

/*
 * Story model definition
 */
module.exports = (sequelize, DataTypes) => sequelize.define('Story', {
  id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
  saluteCount: { type: DataTypes.BIGINT, allowNull: false, defaultValue: 0 },
  shareCount: { type: DataTypes.BIGINT, allowNull: false, defaultValue: 0 },
  status: {
    type: DataTypes.ENUM,
    allowNull: false,
    defaultValue: Statuses.Requested,
    values: _.values(Statuses),
  },
  title: { type: DataTypes.STRING, allowNull: false },
  text: { type: DataTypes.STRING, allowNull: false },
  viewCount: { type: DataTypes.BIGINT, allowNull: false, defaultValue: 0 },
  createdBy: { type: DataTypes.BIGINT, allowNull: false },
  updatedBy: DataTypes.BIGINT,
}, {});
