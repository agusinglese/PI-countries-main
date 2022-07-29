const { Router } = require("express");
const { postActivity } = require("../controllers/activities.js");
const router = Router();
const { Activity, Country } = require("../db.js");

router.post("/", async (req, res) => {
  const { name, difficulty, season, duration, countries } = req.body;
  if (!name || !duration || !difficulty || !season || !countries.length) {
    res.sendStatus(404).send("Incomplete data");
  }

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
    res.send(`sor error${e}`);
  }
});

router.get("/", async (req, res) => {
  const activity = await Activity.findAll({ include: { model: Country } });
  res.send(activity);
});

router.put("/put", async (req, res) => {
  const { id, name, duration, season, difficulty, countries } = req.body;
  try {
    await Activity.update(
      { name, duration, season, difficulty },
      { where: { id } }
    );

    res.status(200).send(`The activity ${name} was modified`);
  } catch (e) {
    res.send(e);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  try {
    await Activity.destroy({ where: { id } });
    res.status(200).send("The activity was successfully deleted");
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
