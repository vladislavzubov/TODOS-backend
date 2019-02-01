const express = require('express');
const bodyParser = require('body-parser');

const task = require('./routes/task.route');
const user = require('./routes/user.route');
const index = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://someuser:abcd1234@ds151533.mlab.com:51533/productstutorial';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

index.use(bodyParser.json());
index.use(bodyParser.urlencoded({extended: false}));
index.use('/tasks', task);
index.use('/users', user);
let port = 1234;


index.listen(port, () => {
console.log('Server is up and running on port numner ' + port);
});
