const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async(req, res)=>{
    try {
        const userData = await Post.findAll({
            // where:{
            //     user_id: req.session.user_id
            // }
        })
        // res.status(200).json(userData)
    //     const user = userData.map((users) =>  users.get({ plain: true })
    // );
    // console.log(user)
        res.render('dashboard')
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;