const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

router.get("/", async(req, res) =>{
    try {
        const postData = await Post.findAll({
            include: [{model:Comment}, {model:User}],
            attributes: { exclude: ["password"] },
        })
        res.status(200).json(postData)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

router.post("/", async(req, res) =>{
    try {
        const postData = await Post.findAll({
            include: [{model:Comment}],
        })
        res.status(200).json(postData)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})


module.exports = router;

// add new / update posts