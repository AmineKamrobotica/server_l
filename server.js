const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

app.use("/js/images", express.static("images"));
app.use("/js", express.static("js"));
// listen for requests
app.listen(3005, () => {
  console.log("Server is listening on port ", 3005);
});
