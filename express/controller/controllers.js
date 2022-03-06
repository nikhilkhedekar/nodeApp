const schema = require('../schema/postSchema_1');

exports.api1 = (req, res) => {
    res.json([{
            id: Math.random(),
            name: "VanHuesssen",
            price: 1000,
            date: new Date(),
        },
        {
            id: Math.random(),
            name: "Arrow",
            price: 1000,
            date: new Date(),
        },
        {
            id: Math.random(),
            name: "Raymond",
            price: 1000,
            date: new Date(),
        },
    ])
}

exports.api2 = (req, res) => {
    res.send('api 2 called')
}

exports.postSchema = (req, res) => {
    const post = new schema(req.body);
    console.log('PostSchema', post);
}