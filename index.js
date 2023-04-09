const express = require("express");
const bodyParser = require("body-parser");
const user = require("./backend_stuff/routes/user.js");
// added the line below to import shop.js
const shop = require("./backend_stuff/routes/shop.js");
const InitiateMongoServer = require("./backend_stuff/config/db.js");

// Initiate Mongo Server
InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

// /**
//  * Router Middleware
//  * Router - /user/*
//  * Method - *
//  */
 app.use("/user", user);
 app.use("/shop", shop);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
