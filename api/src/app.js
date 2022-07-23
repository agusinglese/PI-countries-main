const express = require("express");
const cookieParser = require("cookie-parser");
//const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const errorHandler = require("./middlewares/errorHandler");
const headers = require("./middlewares/headers");

require("./db.js");

const server = express();

server.name = "API";

//parsear el json de forma correcta
server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(express.json({ limit: "50mb" }));

server.use(cookieParser());
server.use(morgan("dev")); //output en la consola
//headers
server.use(headers);

//routes
server.use("/", routes);

// Error catching endware.
server.use(errorHandler);

module.exports = server;
