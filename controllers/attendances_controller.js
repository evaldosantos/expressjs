module.exports = app => {
  app.get("/attendances", (req, res) => {
    res.send("[GET] You are on the attendance route!")
  });

  app.post("/attendances", (req, res) => {
    res.send("[POST] You are on the attendance route!")
  });
}