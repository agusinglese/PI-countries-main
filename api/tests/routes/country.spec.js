/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Country, conn } = require("../../src/db.js");

const agent = session(app);

describe("Country routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Country.sync({ force: true }).then(() => {
      /* Country.create({
        name: "Chile",
        id: "CHL",
        flag: "https://flagcdn.com/w320/cl.png",
        continent: "South America",
        capital: "Santiago",
        subregion: "South America",
        area: "756102",
        population: 19116209,
      });

      Country.create({
        name: "Brazil",
        id: "BRA",
        flag: "https://flagcdn.com/w320/br.png",
        continent: "South America",
        capital: "Brasília",
        subregion: "South America",
        area: "8515767",
        population: 212559409,
      });*/

      Country.create({
        name: "Argentina",
        id: "ARG",
        flag: "https://flagcdn.com/w320/ar.png",
        continent: "South America",
        capital: "Buenos Aires",
        subregion: "South America",
        area: "2780400",
        population: 45376763,
        activities: [],
      });
    })
  );
  describe("GET /countries", () => {
    it("should get 200", () => agent.get("/countries").expect(200));
    it("return list of countries", () => {
      return agent
        .get("/countries")
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(
          '[{"name": "Argentina", "id": "ARG","flag": "https://flagcdn.com/w320/ar.png","continent": "South America","capital": "Buenos Aires","subregion": "South America","area": "2780400","population": 45376763,"activities":[]}]'
        );
    });
  });
});
