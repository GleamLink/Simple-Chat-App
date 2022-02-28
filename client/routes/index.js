var express = require('express');
var router = express.Router();
var axios = require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Gleam Chat App',
    isLoggedIn: false,
    login: () => {
      isLoggedIn = true
    }
  });
});

module.exports = router;