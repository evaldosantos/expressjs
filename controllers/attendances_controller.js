const Atendimento = require("../models/atendimento");

module.exports = app => {
  app.get("/attendances", (req, res) => {
    res.send("[GET] You are on the attendance route!")
  });

  app.post("/attendances", (req, res) => {
    const atendimento = req.body;
    Atendimento.adiciona(atendimento);
    res.send("[POST] You are on the attendance route!")
  });
}