var express = require('express');
var router = express.Router();
var flickr = require('../config').flickr

// console.log(process.env.FLICKER_KEY);

// console.log(flickr);

/* GET home page. */

router.get('/', function(req, res, next) {
  var puppyArray = []
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
      var imageUrls = createImageUrl(puppyArray[0]);

      // res.render('index', imageUrls);
     console.log(imageUrls)
    });
});

function createImageUrl(urlArr) {
  var imageUrls = urlArr.map(function (photo) {
    var farmId = photo.farm
    var serverId = photo.server
    var id = photo.id
    var secret = photo.secret
    var url = 'https://farm' + farmId + ".staticflickr.com/" + serverId + '/' + id + '_' + secret + '.jpg'
    return url
  })
  return imageUrls
}

module.exports = router;

//access orject and retrieve the photo array.
//take the array, pull one photo out of the array, and display.
//
//link button with a function which moves through the array and displays another function //https://farm9.staticflickr.com/8591/28585691246_4616b70d41.jpg
