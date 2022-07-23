const { Router } = require("express");
const { postActivity } = require("../controllers/activities.js");
const router = Router();
const { Activity, Country } = require("../db.js");

//FALTA RELACIONARLA CON LOS PAISES
router.post("/", async (req, res) => {
  const { name, difficulty, season, duration, countries } = req.body;
  console.log(name, difficulty, season, duration);
  if (!name || !duration || !difficulty || !season) {
    res.status(404).send("Incomplete data");
  }
  console.log(countries);
  try {
    const [newActivity, created] = await Activity.findOrCreate({
      where: {
        name,
        difficulty,
        season,
        duration,
      },
    });
    if (countries.length > 0) {
      countries.forEach(async (country) => {
        let searchCountry = await Country.findAll({ where: { name: country } });
        await newActivity.setCountries(searchCountry);
      });
    }

    res.status(200).send(newActivity);
  } catch (e) {
    res.send(e);
  }
});

router.get("/", async (req, res) => {
  const activity = await Activity.findAll();
  res.send(activity);
});

module.exports = router;
