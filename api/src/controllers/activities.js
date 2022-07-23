const Activity = require("../db");

//FALTA HACER LA RELACION
const postActivity = async (name, difficulty, season, duration) => {
  const [newActivity, created] = await Activity.findOrCreate({
    where: {
      name,
      difficulty,
      season,
      duration,
    },
  });
  console.log(newActivity);
  return newActivity;
};

module.exports = {
  postActivity,
};
