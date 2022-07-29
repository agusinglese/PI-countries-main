const { Country, conn } = require("../../src/db.js");
const { expect } = require("chai");

describe("Country model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Country.sync({ force: true }));
    describe("name", () => {
      it("should not create the Country if name is not send", (done) => {
        Country.create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
    });
    describe("continent", () => {
      it("should not create the Country if continent is not send", (done) => {
        Country.create({ name: "Argentina", capital: "Buenos Aires" })
          .then(() => done(new Error("It requires a valid continent")))
          .catch(() => done());
      });
    });
    describe("capital", () => {
      it("should not create the Country if capital is not send", (done) => {
        Country.create({
          name: "Argentina",
          id: "ARG",
          continent: "South America",
        })
          .then(() => done(new Error("It requires a valid capital")))
          .catch(() => done());
      });
    });
    describe("flag", () => {
      it("should not create the Country if flag is not send", (done) => {
        Country.create({
          name: "Argentina",
          capital: "Buenos Aires",
          continent: "South America",
        })
          .then(() => done(new Error("It requires a valid flag")))
          .catch(() => done());
      });
    });
    describe("ID", () => {
      it("should not create the Country if ID is not send", (done) => {
        Country.create({
          name: "Argentina",
          capital: "Buenos Aires",
          continent: "South America",
        })
          .then(() => done(new Error("It requires a valid id")))
          .catch(() => done());
      });
    });
  });
});
