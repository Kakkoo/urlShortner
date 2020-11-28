const express = require('express');
const mongoose = require('mongoose');
const urlroutes = require('./routes/api/urlroutes');
const app = express();

//First route
//app.get('/', (req, res) => res.send('Hello'));
//Use routes
app.use('/api/urlroutes', urlroutes);

const port = 7000;
app.listen(port, () => console.log(`Server running on port ${port}`));
//Db Config
const db = require('./config/keys').mongoURI;
//Connect to mongodb
 mongoose
 .connect(db).then(() => console.log('MongoDb Connected'))
 .catch(err => console.log(err));