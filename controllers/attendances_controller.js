module.exports = app => {
  app.get("/attendances", (req, res) => {
    res.send("You are on the attendance route!")
  });
}