const customExpress = require("./config/custom_express");

const app = customExpress();

app.listen(3000, () => {
  console.log("Server running on port 3000!");
});
