const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("activity", {
    name: { type: DataTypes.STRING },
    difficulty: { type: DataTypes.INTEGER, validate: { min: 1.0, max: 5.0 } },
    duration: { type: DataTypes.INTEGER },
    season: {
      type: DataTypes.ENUM("Summer", "Fall", "Winter", "Spring"),
    },
  });
};
