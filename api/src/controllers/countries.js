const { Country, Activity } = require("../db.js");
const axios = require("axios");

const getAllCountries = async () => {
  const countries = await Country.findAll({
    include: {
      model: Activity,
    },
  });
  return countries;
};

const getAPI = async () => {
  const response = await axios.get("https://restcountries.com/v3.1/all");
  const newCountries = response.data.map((e) => {
    return {
      id: e.cca3,
      name: e.name.common,
      flag: e.flags.png,
      continent: e.continents[0],
      capital: e.capital ? e.capital[0] : "Not available",
      subregion: e.subregion,
      area: e.area,
      population: e.population,
    };
  });
  await Country.bulkCreate(newCountries);
};

const getById = async (id) => {
  let newId = id.toUpperCase();
  const countryId = await Country.findByPk(newId, {
    include: { model: Activity },
  });
  return countryId;
};

const getByName = async (name) => {
  let searchName = name.toUpperCase();
  let countries = await getAllCountries();
  let selectCountry = countries.filter((country) =>
    country.name.toUpperCase().includes(searchName)
  );
  return selectCountry;
};

module.exports = {
  getAllCountries,
  getById,
  getAPI,
  getByName,
};
