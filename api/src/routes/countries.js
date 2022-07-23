const { Router } = require("express");
const router = Router();
const axios = require("axios");
const {
  getAPI,
  getAllCountries,
  getById,
  getByName,
} = require("../controllers/countries.js");

router.get("/", async (req, res, next) => {
  const db = await getAllCountries();
  if (db.length === 0) {
    await getAPI();
  }
  next();
});

router.get("/", async (req, res) => {
  const { name } = req.query;
  const countries = await getAllCountries();
  if (name) {
    let selectCountry = await getByName(name);
    selectCountry.length > 0
      ? res.status(200).send(selectCountry)
      : res.status(404).send(`No countries found with the name "${name}"`);
  } else {
    res.status(200).send(countries);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const countryId = await getById(id);
  countryId
    ? res.status(200).send(countryId)
    : res.status(404).send(`No countries found with the code "${id}"`);
});

module.exports = router;
