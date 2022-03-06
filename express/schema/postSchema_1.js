const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    body: {
        productName: {
            type: 'string',
            value: ''
        },
        productPrice: {
            type: "number",
            value: 0,
            min: 1000,
            max: 10000,
        },
    }

});

module.exports = mongoose.model("Post", postSchema);