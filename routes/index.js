var express = require('express');
var router = express.Router();
var flickr = require('../config').flickr

// console.log(process.env.FLICKER_KEY);

// console.log(flickr);

/* GET home page. */

router.get('/', function(req, res, next) {
    console.log("Getting the request");
  // res.render('index', { title: 'Flickr Clickr' });
  flickr
    .request()
    .media()
    .search("puppies")
    .get()
    .then(function (response) {
    // An array of media objects matching the search term
    console.log(response);
});

});

module.exports = router;
