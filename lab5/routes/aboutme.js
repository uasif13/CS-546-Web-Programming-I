const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (_, res) => {
  try {
    aboutMe = {
      name: "Asif Uddin",
      cwid: "10427933",
      biography:
        `My name is Asif and I am an electrical engineer. I have 1.5 years of experience in Python and Java. I am currently learning C++ and developing websites on my Github. 
        I've trekked through the Sundarbans- the largest mangrove forest in the world. One little-known fact about myself is that I can touch my nose with my tongue.`,
      favoriteShows: ["the social dilemma", "friends", "game of thrones"],
    };
    res.json(aboutMe);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
