'use strict';

/*
 * Copyright (c) 2018 Topcoder, Inc. All rights reserved.
 */

/*
 * Rank model definition
 */
module.exports = (sequelize, DataTypes) => sequelize.define('Rank', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false
});
