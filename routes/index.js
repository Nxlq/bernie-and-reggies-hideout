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
  {
    name: "Bernie",
    message: "IDGAF EITHER AHAHAHAHAHAH 😂😁😁🤣🤣",
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

router.get("/new", function (req, res, next) {
  res.render("newMessageForm", { title: "Bernie and Reggie's Hideout" });
});

router.post("/new", function (req, res, next) {
  const { name, messageText } = req.body;
  messages.push({ name, message: messageText, date: new Date() });
  res.redirect("/");
});

module.exports = router;
