const express = require("express");
const router = express.Router();
const dbVideos = require("../model/Video");
const Data = require("./data");

// router.get("/", (req, res) => {
//   res.status(200).send("Youtube shorts clone by code with akky");
// });

router.get("/", (req, res) => {
  res.status(200).send(Data);
});

router.get("/posts", (req, res) => {
  dbVideos.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

router.post("/posts", (req, res) => {
  const ytVideoDB = req.body;

  dbVideos.create(ytVideoDB, (err, data) => {
    if (err) {
      res.status(500).send(err);
      console.log(err);
    } else {
      res.status(201).send(data);
    }
  });
});

module.exports = router;
