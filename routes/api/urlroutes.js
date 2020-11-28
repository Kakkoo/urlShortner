const express = require("express");
const Urlroute = require("../../models/Urlroute");
const router = express.Router();

//@route GET /api/urlroutes/test
//@desc  Tests urlroutes js
//@access Public
router.get("/test", (req, res) => res.json({ msg: "urlroutes works" }));
//@route POST /api/urlroutes/test
//@desc  take full url then give back short url
//@access Public
router.post("/full-shortURL", (req, res) => {
  function rec() {
    let num = Math.floor(Math.random() * 1000);
    Url.findOne({ number: num }).then((data) => {
      if (data) {
        rec();
      } else {
        let FULLURL = req.body.fullurl;
        let NUM = num;
        const ALPHABET =
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        BASE = ALPHABET.length;
        let digits = [];
        while (NUM >= 1) {
          let remainder = NUM % BASE;
          digits.push(ALPHABET.charAt(remainder));
          NUM = NUM / BASE;
        }
        let shorturl = digits.reverse().join("");
        const newUrl = new Url({
          fullurl: FULLURL,
          number: NUM,
          shorturl: shorturl,
        });
        newUrl
          .save()
          .then((Url) => res.json(Url))
          .catch((err) => console.log("second last"));
      }
    });
  }
});

module.exports = router;
