const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    body: {
        userDetails: {
            name: "",
            age: 0,
        },
        userContact: {
            mobNo: 0,
        },
    }
});

module.exports = mongoose.model("Post", postSchema);