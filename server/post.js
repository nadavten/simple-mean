"use strict";
var mongoose = require("mongoose");
var schema = mongoose.Schema;
var postSchema = new schema({
    title: String,
    body: String,
});
exports.Post = mongoose.model('Post', postSchema);
