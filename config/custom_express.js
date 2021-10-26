const express = require("express");
const consign = require("consign");

module.exports = () => {
  const app = express();
  // parse application/x-www-form-urlencoded
  app.use(express.json())
  app.use(express.urlencoded({ extended: true}))
  consign().include("controllers").into(app);

  return app;
}
