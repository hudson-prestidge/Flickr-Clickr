var express = require('express');
var router = express.Router();
var flickr = require('../config').flickr

// console.log(process.env.FLICKER_KEY);

// console.log(flickr);

/* GET home page. */

router.get('/', function(req, res, next) {
  var puppyArray = []
  //console.log("Getting the request");
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
    // An array of media objects matching the search term
    //console.log(response);
   puppyArray.push(response.body.photos.photo)
    var idArray = puppyArray[0].map(function(photo){
    return photo.id
   })
   console.log(idArray)




  // flickr
  //   .request()
  //   .media('22397283330')
  //   .get()
  //   .then(function (response) {
  //       // Photo object with links to resources
  //   });
});



});

module.exports = router;

//access orject and retrieve the photo array.
//take the array, pull one photo out of the array, and display.
//
//link button with a function which moves through the array and displays another function //
