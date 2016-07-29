var dotenv = require('dotenv');
var Flickr = require('flickr-sdk')
dotenv.load();

var flickr = new Flickr({
  "apiKey": process.env.FLICKER_KEY,
  "apiSecret": process.env.FLICKER_SECRET_KEY
});

module.exports = {
  flickr: flickr
}
