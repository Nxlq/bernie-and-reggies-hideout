const express = require("express");
const router = express.Router();

const messages = [
  {
    name: "Bernie",
    message: "Yo Reggie you down to ditch class tomorrow? 🚬",
    date: new Date(),
  },
  {
    name: "Reggie",
    message: "Sure whatever idgaf 🤷‍♂️",
    date: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Bernie and Reggie's Hideout",
    messages: messages,
  });
});

module.exports = router;
