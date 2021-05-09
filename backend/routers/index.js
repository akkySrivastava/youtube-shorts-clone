const express = require("express");
const router = express.Router();

const vidRouter = require("./Video");

router.get("/", (req, res) => {
  res.send("Youtube shorts clone by Code With Akky");
});

router.use("/video", vidRouter);

module.exports = router;
