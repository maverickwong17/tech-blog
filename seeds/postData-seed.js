const { Post } = require('../models');

const postData = [
    {
        "title": "Sample Title",
        "content": "Sample Content",
        "user_id": 1
    },
    {
        "title": "Sample Title 2",
        "content": "Sample Content 2",
        "user_id": 2
    },
    {
        "title": "Sample Title 3",
        "content": "Sample Content 3",
        "user_id": 2
    },
    {
        "title": "Sample Title 4",
        "content": "Sample Content 4",
        "user_id": 3
    },
    {
        "title": "Sample Title 5",
        "content": "Sample Content 5",
        "user_id": 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;