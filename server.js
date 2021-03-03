const mongoose = require("mongoose");
const express = require("express");
const expressValidator = require("express-validator");
let Schema = mongoose.Schema;
const app = express();
const port = process.env.PORT || 3001;

app.get("/users/", require("./routes/userRoutes"));
app.listen(port, () => {
  console.log("Server is up  on port" + port);
});
