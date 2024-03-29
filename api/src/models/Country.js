const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "country",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id: { type: DataTypes.STRING(3), primaryKey: true },
      flag: { type: DataTypes.STRING, allowNull: false },
      continent: { type: DataTypes.STRING, allowNull: false },
      capital: { type: DataTypes.STRING, allowNull: false },
      subregion: { type: DataTypes.STRING },
      area: { type: DataTypes.STRING },
      population: { type: DataTypes.INTEGER },
      timezones: { type: DataTypes.STRING },
    },
    { timestamps: false }
  );
};
