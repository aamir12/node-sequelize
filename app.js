const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
require("./models");
dotenv.config();
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//configuration
app.set("view engine", "ejs");
app.set("views", "views");

//middleware
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

//include all routes here
const userCtrl = require("./controllers/userController");

app.get("/add", userCtrl.add);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold
  )
);
