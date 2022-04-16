const mongoose = require('mongoose');
const schema = require('../../schema/postSchema_1');

exports.getRoute1 = (req, res) => {
    res.send("listening on route 1");
}

exports.getRoute2 = (req, res) => {
    res.send("listening on route 2");
}

exports.postSchema = (req, res) => {
    const postReq = new schema(req.body);
    console.log('postSchema', postReq);
}