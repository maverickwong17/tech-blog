const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/',withAuth, async(req, res)=>{
    try {
        const postData = await Post.findAll({
            where:{
                user_id: req.session.user_id
            },
            include: [{model:Comment, include : [{model:User}]},
            {model:User},]
        })
        // res.status(200).json(postData)
        const userPosts = postData.map((users) =>  users.get({ plain: true })
    )
        res.render('dashboard', {userPosts, loggedIn:req.session.loggedIn})
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;