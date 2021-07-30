const config = require("config");
const mongoose = require("mongoose");
require('dotenv').config();

const DB_URI = process.env.MONGO_DB_URL || config.get("mongo.uri");

const connect = () => {
  mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

  const { connection } = mongoose;

  // eslint-disable-next-line no-console
  connection.on("error", () => console.log("Conection with mongo failure"));

  // eslint-disable-next-line no-console
  connection.once("open", () => console.log("Conection with mongo success!"));
};

module.exports = {
  connect,
};
