const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

module.exports = router;

router.post("/", async(req, res) =>{
    try {
       const commentData = await Comment.create({
           ...req.body,
           user_id: req.session.user_id
       })
       res.status(200).json(commentData)
    } catch (err) {
       console.log(err);
       res.status(500).json(err);
    }
})

// add new / update comments