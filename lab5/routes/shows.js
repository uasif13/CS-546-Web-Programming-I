const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (_, res) => {
  try {
    const { data } = await axios.get("http://api.tvmaze.com/shows");
    res.json(data);
  } catch (e) {
    res.status(500).send();
  }
});

router.get("/:id", async (req, res) => {
  try {
    // if (!Number.isInteger(req.params.id) || req.params.id <= 0)
    //   throw "ID is not a positive whole number";
    const { data } = await axios.get(
      `http://api.tvmaze.com/shows/${req.params.id}`
    );
    res.json(data);
  } catch (e) {
    res
      .status(404)
      .json({ message: "Not found"});
    console.log();
  }
});

module.exports = router;
