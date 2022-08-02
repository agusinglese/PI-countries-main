const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("activity", {
    name: {
      type: DataTypes.STRING,
      unique: true,
      set(value) {
        this.setDataValue("name", value[0].toUpperCase() + value.slice(1));
      },
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: 1.0, max: 5.0 },
    },
    duration: { type: DataTypes.INTEGER, allowNull: false },
    season: {
      type: DataTypes.ENUM("Summer", "Fall", "Winter", "Spring"),
      allowNull: false,
    },
  });
};
