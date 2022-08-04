const { Router } = require("express");
const router = Router();
const { Activity, Country, country_activity } = require("../db.js");

router.post("/", async (req, res) => {
  const { name, difficulty, season, duration, countries } = req.body;
  if (!name || !duration || !difficulty || !season || !countries.length) {
    return res.status(404).send("Incomplete data");
  }

  try {
    const searchAct = await Activity.findOne({ where: { name } });
    if (searchAct) res.status(404).send("Name already exists");
    else {
      const [newActivity] = await Activity.findOrCreate({
        where: {
          name,
          difficulty,
          season,
          duration,
        },
      });

      if (countries.length > 0) {
        countries.forEach(async (country) => {
          let searchCountry = await Country.findAll({
            where: { name: country },
          });

          await newActivity.setCountries(searchCountry);
        });
      }
      res.status(200).send(newActivity);
    }
  } catch (e) {
    console.log(e);
  }
});

router.get("/", async (req, res) => {
  try {
    const activity = await Activity.findAll({
      include: { model: Country },
      order: [["name", "ASC"]],
    });
    res.send(activity);
  } catch (e) {
    res.send(e);
  }
});

router.put("/put", async (req, res) => {
  const { id, name, duration, season, difficulty, countries } = req.body;
  try {
    await Activity.update(
      { name, duration, season, difficulty },
      { where: { id } }
    );

    if (countries.length > 0) {
      const activity = await Activity.findOne({
        where: { id },
        include: { model: Country },
      });
      await country_activity.destroy({ where: { activityId: id } });
      countries.forEach(async (country) => {
        let searchCountry = await Country.findAll({
          where: { name: country },
        });

        await activity.addCountries(searchCountry, {
          through: country_activity,
        });
      });
    }

    res.status(200).send("OK");
  } catch (e) {
    res.send(e);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await Activity.destroy({ where: { id } });
    res.status(200).send("The activity was successfully deleted");
  } catch (e) {
    res.send(e);
  }
});

router.get("/relacion", async (req, res) => {
  res.send(await country_activity.findAll());
});

module.exports = router;
