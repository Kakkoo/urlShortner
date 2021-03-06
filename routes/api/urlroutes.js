const express = require("express");
const Urlroute = require("../../models/Urlroute");
const router = express.Router();

//@route GET /api/urlroutes/test
//@desc  Tests urlroutes js
//@access Public

router.get("/test", (req, res) => res.json({ msg: "urlroutes works" }));

//@route POST /api/urlroutes/full-shortURL
//@desc  take full url then give back short url
//@access Public

router.post("/full-shortURL", (req, res) => {
  function rec() {
    let num = Math.floor(Math.random() * 1000);
    return num;
  }
  let num = Math.floor(Math.random() * 1000);
  Url.findOne({ number: num }).then((data) => {

    // checking if data is already there of that number, then call function rec() 
    //to generate new number.

    if (data) {
      let num = rec();
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
        number: num,
        shorturl: shorturl,
      });
      newUrl
        .save()
        .then((Url) => res.json(Url))
        .catch((err) => console.log("second last"));
    } else {
       
      // when data is not there of first generated number, then generate shorturl

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
        number: num,
        shorturl: shorturl,
      });
      newUrl
        .save()
        .then((Url) => res.json(Url))
        .catch((err) => console.log("second last"));
    }
  });
});

//@route GET /api/urlroutes/short-fullurl
//@desc  get fullurl by shorturl
//@access Public

router.get("/short-fullURL/:shorturl", (req, res) => {
  const shorturl =req.params.shorturl;
  const ALPHABET =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  BASE = ALPHABET.length;
  let num = 0;
  // getting number of base 10 back from shorturl which is on base 62
  
  for (let i = 0; i < shorturl.length; i++) {
    num = num * BASE + ALPHABET.indexOf(shorturl.charAt(i));
  }
  console.log(`number${num}`);
  Url.findOne({ number: num })
    .then((Url) => res.json(Url))
    .catch((err) => console.log("data not found"));
    
});

module.exports = router;
