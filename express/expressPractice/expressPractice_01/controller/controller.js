const postSchema = require('../schema/schema');

exports.routeOne = (req, res) => {
    res.send('calling route one');
}

exports.routeTwo = (req, res) => {
    res.send('calling route two');
}

exports.postSchema = (req, res) => {
    const postData = new postSchema(req.body);
    console.log('PostSchema', postData);
}