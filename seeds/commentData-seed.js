const { Comment } = require('../models');

const commentData = [
    {
        "content": "Sample Comment 1",
        "post_id": 1
    },
    {
        "content": "Sample Comment 2",
        "post_id": 1
    },
    {
        "content": "Sample Comment",
        "post_id": 2
    },
    {
        "content": "Sample Comment",
        "post_id": 3
    },
    {
        "content": "Sample Comment",
        "post_id": 4
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;