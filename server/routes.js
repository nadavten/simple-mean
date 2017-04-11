"use strict";
var express = require("express");
var post_1 = require("./post");
//import axios from 'axios';
var router = express.Router();
//const API = 'https://jsonplaceholder.typicode.com';
router.get('/', function (req, res) {
    res.send('api works');
});
router.get('/post', function (req, res) {
    post_1.Post.create({
        title: 'title post 1',
        body: 'body post 1'
    }, function (err, post) {
        if (err) {
            res.send(err);
        }
        res.json(post);
    });
});
router.get('/posts', function (req, res) {
    post_1.Post.find({}, function (err, posts) {
        if (err) {
            res.send(err);
        }
        res.json(posts);
    });
    // axios.get(`${API}/posts`)
    //     .then(posts=>{
    //         res.status(200).json(posts.data);
    //     })
    //     .catch(err=>{
    //         res.status(500).send(err);
    //     });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
