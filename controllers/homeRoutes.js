const router = require('express').Router();
const { User, Post, Comments } = require('../models');
const withAuth = require('../utils/auth');

// home page
router.get('/', async (req, res) => {

    await Post.findAll({
        include: [
            { model: User }
        ],
        order: [['created_at', 'DESC']]
    })
    .then(async data => {
        const posts = data.map( post => post.get({ plain: true }) );
        const user = await User.findOne({
            where: posts.user_id, // match post user id to user table id
            attributes: { exclude: ['password'] }
        });
        
        res.render('home', {title: 'Home | The Tech Blog', loggedIn: req.session.loggedIn, posts, user});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// sign up page
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('signup', {title: 'Sign Up | The Tech Blog'});
});

// login page
router.get('/login', async (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('partials/login', {title: 'Login | The Tech Blog'});
});

// all post dashboard
router.get('/dashboard', withAuth, async (req, res) => {
    await Post.findAll({
        where: {user_id: req.session.userId},
        include: [
            { model: User, attributes: ['username'] },
            { model: Comments }
        ],
        order: [['created_at', 'DESC']]
    })
    .then(async data => {
        // console.log(data);
        const posts = data.map( post => post.get({ plain: true }) );
        // console.log(posts);
        const user = await User.findOne({
            where: posts.user_id, // match post user id to user table id
            attributes: { exclude: ['password'] }
        });
        // console.log(user.username);
        res.render('dashboard', {title: 'Dashboard | The Tech Blog', pageTitle: 'Your Dashboard', loggedIn: req.session.loggedIn, posts, user});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// new post
router.get('/dashboard/post/new', withAuth, (req, res) => {
    res.render('new-post', {title: 'Create New Post | The Tech Blog', pageTitle: 'Your Dashboard', loggedIn: req.session.loggedIn});
});

// edit post
router.get('/post/:id/edit', withAuth, async (req, res) => {
    await Post.findOne({
        where: {id: req.params.id},
        include: [
            { model: User }
        ],
    })
    .then(async data => {
        const post = {
            pid: req.params.id,
            userId: data.id,
            postTitle: data.title,
            content: data.content,
            time: data.created_at
        };
        
        //console.log(post);
        const user = await User.findOne({
            where: data.user_id, // match post user id to user table id
            attributes: { exclude: ['password'] }
        });

        res.render('edit-post', {title: 'Edit Post | The Tech Blog', loggedIn: req.session.loggedIn, post});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// add comment on post
router.get('/post/:id', withAuth, async (req, res) => {
    await Post.findOne({
        where: {id: req.params.id},
        include: [
            { model: User },
            { model: Comments }
        ],
    })
    .then(async data => {
        const post = {
            pid: req.params.id,
            userId: data.id,
            postTitle: data.title,
            content: data.content,
            time: data.created_at
        };
        
        //console.log(post);
        const user = await User.findOne({
            where: data.user_id, // match post user id to user table id
            attributes: { exclude: ['password'] }
        });
        const userComments = await Comments.findAll({
            where: {post_id: req.params.id},
            include: [
                { model: User }
            ],
            order: [['created_at', 'DESC']]
        }); 
        const userComment = userComments.map( comment => comment.get({ plain: true }) );
        console.log(userComment);

        res.render('single-post', {title: `${post.postTitle} | The Tech Blog`, loggedIn: req.session.loggedIn, post, user: user.username, userComment, addComment: true});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// view comments on post
router.get('/post/:id/comments', async (req, res) => {
    await Post.findOne({
        where: {id: req.params.id},
        include: [
            { model: User },
            { model: Comments }
        ],
    })
    .then(async data => {
        const post = {
            pid: req.params.id,
            userId: data.id,
            postTitle: data.title,
            content: data.content,
            time: data.created_at
        };        
        const user = await User.findOne({
            where: data.user_id, // match post user id to user table id
            attributes: { exclude: ['password'] }
        });
        const userComments = await Comments.findAll({
            where: {post_id: req.params.id},
            include: [
                { model: User }
            ],
            order: [['created_at', 'DESC']]
        }); 
        const userComment = userComments.map( comment => comment.get({ plain: true }) );
        console.log(userComment);

        res.render('single-post', {title: `${post.postTitle} | The Tech Blog`, loggedIn: req.session.loggedIn, post, user: user.username, userComment, viewComments: true});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// wildcard
router.get('/*', (req, res) => {
    res.redirect('/');
});

module.exports = router;