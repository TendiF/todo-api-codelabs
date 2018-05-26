'use strict';
module.exports = function(sequelize, DataTypes) {
  var activity = sequelize.define('activity', {
    name: DataTypes.STRING,
    priority: DataTypes.INTEGER,
    location: DataTypes.STRING,
    time_start: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return activity;
};