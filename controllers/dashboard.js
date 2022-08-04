const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/dashboard', withAuth, async(req, res)=>{
    try {
        const userData = await Post.findAll({
            where:{
                user_id: req.session.id
            }
        })
        res.status(200).json(userData)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;