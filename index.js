const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require('fs')

require("dotenv").config();
var models_path = __dirname + '/schema'
console.log(models_path,'models_path')
require('./schema')
// fs.readdirSync(models_path).forEach(function (file) {
//  require(models_path + '/' + file)
// })
const { connect } = require("./database/mongo.service");
const { adminRoute } = require("./routes");


// require("./schema");

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "5000kb" }));
app.use(bodyParser.urlencoded({ extended: true }));
connect();

app.use("/admin", adminRoute);

const port = process.env.PORT;
console.log(port, "----");

app.listen(port, () => {
  console.log(`Project started at ${port}`);
});
