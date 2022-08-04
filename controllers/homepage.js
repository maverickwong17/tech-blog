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
        // res.status(200).json(postData)
        res.render('homepage', {posts,loggedIn: req.session.loggedIn})
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

router.get('/post/:id', withAuth, async(req, res)=>{
    
})

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

module.exports = router;