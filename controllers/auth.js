const User = require('../models/user');

exports.getLogin = (req, res, next) =>{
    console.log(req.session.isLoggedIn);
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated : req.session.isLoggedIn
    });
};

exports.postLogin = (req, res, next) => {
     User.findById("5ffe6e232977683305c0c24a")
      .then((user) => {
        req.session.isLoggedIn = true;
        req.session.user = user;
        res.redirect('/');
      })
      .catch((err) => console.log(err));
  }