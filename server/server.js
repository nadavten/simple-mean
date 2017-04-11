"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var mongoose = require("mongoose");
var config_1 = require("./config");
var routes_1 = require("./routes");
var helper_1 = require("../helper");
// Get port from environment and store in Express.
var port = process.env.PORT || 4000;
mongoose.connect(config_1.default.localDbUrl);
var app = express();
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Point static path to dist
app.use(express.static(path.join(helper_1.appRoot, 'dist')));
// Set our api routes
app.use('/api', routes_1.default);
// Catch all other routes and return the index file
// MUST COME AFTER ALL OTHER ROUTES
app.get('*', function (req, res) {
    res.sendFile(path.join(helper_1.appRoot, 'dist/index.html'));
});
app.listen(port, function (err) {
    if (err) {
        throw err;
    }
    console.log("listening on port " + port);
});
