const { Country, Activity } = require("../db.js");
const axios = require("axios");

const getAllCountries = async () => {
  const countries = await Country.findAll({
    include: { model: Activity },
  });
  return countries;
};

const getAPI = async () => {
  const response = await axios.get("https://restcountries.com/v3.1/all");
  const newCountries = response.data.map((e) => {
    return {
      id: e.cca3,
      name: e.name.common,
      flag: e.flags.svg,
      continent: e.continents[0],
      capital: e.capital ? e.capital[0] : "Not available",
      subregion: e.subregion,
      area: e.area,
      population: e.population,
      timezones: e.timezones ? e.timezones[0] : "Not found",
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

const getByContinent = async (nameContinent) => {
  let searchContinent = nameContinent.toUpperCase();
  let countries = await getAllCountries();
  let selectCountry = countries.filter(
    (country) => country.continent.toUpperCase() === searchContinent
  );
  return selectCountry;
};

const getByActivity = async (nameActivity) => {
  let activity = await Activity.findAll({
    where: { name: nameActivity },
    include: { model: Country },
  });
  console.log(activity[0].countries);
  let countriesByAct = activity[0].countries;
  return countriesByAct;
};

module.exports = {
  getAllCountries,
  getById,
  getAPI,
  getByName,
  getByContinent,
  getByActivity,
};
