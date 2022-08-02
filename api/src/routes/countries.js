const { Router } = require("express");
const router = Router();
const {
  getAPI,
  getAllCountries,
  getById,
  getByName,
  getByContinent,
  getByActivity,
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
  try {
    const countries = await getAllCountries();
    if (name) {
      let selectCountry = await getByName(name);
      selectCountry.length > 0
        ? res.status(200).send(selectCountry)
        : res.status(404).send(`No countries found with the name "${name}"`);
    } else {
      res.status(200).send(countries);
    }
  } catch (e) {
    console.log(e);
  }
});

router.get("/filter", async (req, res) => {
  const { continent, activity } = req.query;
  try {
    if (activity === "All" && continent === "All") {
      const countries = await getAllCountries();
      res.status(200).send(countries);
    } else if (activity === "All" && continent !== "All") {
      const countries = await getByContinent(continent);
      res.status(200).send(countries);
    } else if (activity !== "All" && continent === "All") {
      const countries = await getByActivity(activity);
      res.status(200).send(countries);
    } else if (activity !== "All" && continent !== "All") {
      const countriesByContinent = await getByContinent(continent);
      let countries = [];
      countriesByContinent.forEach((el) => {
        if (el.activities.length) {
          el.activities.forEach((e) => {
            if (e.name === activity) {
              countries.push(el);
            }
          });
        }
      });
      countries.length
        ? res.status(200).send(countries)
        : res.status(404).send("Countries not found");
    }
  } catch (e) {
    console.log(e);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const countryId = await getById(id);
    countryId
      ? res.status(200).send(countryId)
      : res.status(404).send(`No countries found with the code "${id}"`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
