if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const router = require("./routers");
const bodyParser = require("body-parser");
const db = require("./db");
const cors = require("cors");
const path = require("path");
const app = express();

// import Data from "./data.js";
// import Videos from "./dbModel.js";

//app config
const port = process.env.PORT || 80;

//middleware

db.connect();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.use("/api", router);

app.use("/uploads", express.static(path.join(__dirname, "/../uploads")));
app.use(express.static(path.join(__dirname, "/../frontend/build")));

app.get("*", (req, res) => {
  try {
    res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
  } catch (e) {
    res.send("Welcome to Youtube shorts clone");
  }
});

app.use(cors());

//listen
app.listen(port, () => {
  console.log(`listening on local host: ${port}`);
});
