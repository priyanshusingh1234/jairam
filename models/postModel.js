const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    thumbnail: { type: String },  // This can be a URL to the image
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
