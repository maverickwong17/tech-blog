const router = require('express').Router();
const { User, Post,Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get("/", async(req, res) =>{
    try {
        const postData = await Post.findAll({
            include: [{model:User,
            attributes: { exclude: ["password"] }},]
        })
        const posts = postData.map((post) =>  post.get({ plain: true })
    );
        res.render('homepage', {posts,loggedIn: req.session.loggedIn})
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

router.get('/posts/:id', withAuth, async(req, res)=>{
    try {
        const postData = await Post.findByPk(req.params.id,{
            include: [{model:Comment, include : [{model:User}]},
            {model:User},]
        })
        const post = postData.get({ plain: true })
        res.render('post', {post, loggedIn:req.session.loggedIn})
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

module.exports = router;