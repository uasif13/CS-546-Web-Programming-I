const express = require('express');
const router = express.Router();
const axios = require('axios')
const regex = /(<([^>]+)>)/ig

router.get("/:id", async (req, res) => {
  try {
    // if (!Number.isInteger(req.params.id) || req.params.id <= 0)
    //   throw "ID is not a positive whole number";
    const { data } = await axios.get(
      `http://api.tvmaze.com/shows/${req.params.id}`
    );
    data.summary = data.summary.replace(regex,'');
    res.render('partials/showDetails',{data: data, title: data.name});
  } catch (e) {
    res
      .status(404)
      .render('partials/errors',{ errors: "There is no show for the given ID. Please provide a positive number for a show", title: "Error in Show Details Query"});
  }
});

module.exports = router;