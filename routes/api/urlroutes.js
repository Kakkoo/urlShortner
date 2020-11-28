const express = require('express');
const Urlroute = require('../../models/Urlroute');
const router = express.Router();

//@route GET /api/urlroutes/test
//@desc  Tests urlroutes js
//@access Public
router.get('/test', (req, res) => res.json({msg: 'urlroutes works'}));
//@route POST /api/urlroutes/test
//@desc  take full url then give back short url
//@access Public
router.post('full-shortURL', (req, res) => {
Url.findone({ number: req.body.number })
  .then((num) => {
    if (num) {
      return res.status(400).json({ number: "Number already exists." });
    } else {
      let FULLURL = req.body.fullurl;
      let NUM = req.body.number;
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
        .then((shorturl) => res.json(shorturl))
        .catch((err) => console.log(err));
    }
  })
  .catch((err) => console.log(err));
})

module.exports = router;