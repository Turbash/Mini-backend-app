const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/new');

const userSchema = mongoose.Schema({
    email: String,
    password: String,
    username: String,
    name: String,
    age: Number,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
    profilepic:{
        type: String,
        default: "default.jpg"
    }
});

module.exports = mongoose.model('User', userSchema);