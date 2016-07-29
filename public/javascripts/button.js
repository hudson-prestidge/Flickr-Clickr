document.addEventListener('DOMContentLoaded', start)

function start() {
  var button = document.getElementById('clickr')
  var urlsArray = document.getElementById('image').dataset.allImage.split(',')
  button.addEventListener('click', function() {
    //pick a random image out of the array
    //
    var index = Math.floor(Math.random()*urlsArray.length)
    document.getElementById('image').src = urlsArray[index]
  })
}
