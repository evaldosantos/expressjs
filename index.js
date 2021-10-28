const customExpress = require("./config/custom_express");
const connection = require("./infrastructure/connection");
const Tables = require("./infrastructure/tables");

connection.connect((error) => {
  if (error) {
    console.log(error)
  } else {
    const app = customExpress();
    const tables = new Tables();
    tables.init(connection);

    app.listen(3000, () => {
      console.log("Server running on port 3000!");
    });
  }
});


