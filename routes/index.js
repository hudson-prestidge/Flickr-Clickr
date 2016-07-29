var express = require('express');
var router = express.Router();
var flickr = require('../config').flickr

// console.log(process.env.FLICKER_KEY);

// console.log(flickr);

/* GET home page. */

router.get('/', function(req, res, next) {
  var puppyArray = []
  res.render('index', { title: 'Flickr Clickr' });
  flickr
    .request()
    .media()
    .search("puppies")
    .get({
      page: 1,
      per_page: 15
    })
    .then(function (response) {
      puppyArray.push(response.body.photos.photo)
      var idArray = puppyArray[0]
     console.log(idArray)
    });
});

module.exports = router;

//access orject and retrieve the photo array.
//take the array, pull one photo out of the array, and display.
//
//link button with a function which moves through the array and displays another function //
