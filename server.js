const express = require('express');
const mongoose = require('mongoose');
const urlroutes = require('./routes/api/urlroutes');
const bodyparser = require('body-parser');
const passport = require("passport");
const users = require("./routes/api/users");
const app = express();

//Body parser configuration
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
//First route
//app.get('/', (req, res) => res.send('Hello'));
//Use routes
app.use('/api/urlroutes', urlroutes);
app.use("/api/users", users);

const port = 7000;
app.listen(port, () => console.log(`Server running on port ${port}`));
//Db Config
const db = require('./config/keys').mongoURI;
//Connect to mongodb
 mongoose
 .connect(db).then(() => console.log('MongoDb Connected'))
 .catch(err => console.log(err));
 app.use(passport.initialize());
require('./config/passport')(passport);