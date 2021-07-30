const express = require("express");
const cors = require("cors");
const config = require("config");
const dbConnect = require("./database");

module.exports = () => {
  const app = express();
  app.set("port", process.env.PORT || config.get("server.port"));

  app.use(cors());
  app.use(express.json());

  // eslint-disable-next-line global-require
  require("../src/routes/index")(app);
  dbConnect.connect();
  return app;
};
