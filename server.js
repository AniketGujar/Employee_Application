const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/databaseConfig');
const mongoose = require('mongoose');
const cors = require('cors')
const route = require('./app/routes/employeeRoutes.js')

// create express app
const app = express();

app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Connecting to the database
mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({ "message": "Welcome to Employee Management Program" });
});

// Require routes
app.use('/api', route);

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});