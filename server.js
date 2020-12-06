const express = require('express');
const mongoose = require('mongoose');
const urlroutes = require('./routes/api/urlroutes');
const bodyparser = require('body-parser');
const passport = require("passport");
const users = require("./routes/api/users");
const path = require('path');
const app = express();

//Body parser configuration
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
//First route
//app.get('/', (req, res) => res.send('Hello'));
//Use routes
app.use('/api/urlroutes', urlroutes);
app.use("/api/users", users);
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const port = process.env.PORT || 7000;
app.listen(port, () => console.log(`Server running on port ${port}`));
//Db Config
const db = require('./config/keys').mongoURI;
//Connect to mongodb
 mongoose
 .connect(db).then(() => console.log('MongoDb Connected'))
 .catch(err => console.log(err));
 app.use(passport.initialize());
require('./config/passport')(passport);