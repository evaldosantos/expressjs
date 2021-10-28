const customExpress = require("./config/custom_express");
const connection = require("./infrastructure/connection");

connection.connect((error) => {
  if (error) {
    console.log(error)
  } else {
    const app = customExpress();
    app.listen(3000, () => {
      console.log("Server running on port 3000!");
    });
  }
});


