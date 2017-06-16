console.log('Hint: you could change the endpoint to grab gifs of any artist... but why would you do that if you already have Prince?')
// show hidden image when purple box is clicked on
$(document).ready(function() {
  showGif()
});

function showGif() {
  //TODO push gifs to arr and randomize placement
  // var imgArr = [];
  var artist = 'prince';
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + artist + "&api_key=dc6zaTOxFJmzC&limit=6";
  //call
  $.ajax({url: queryURL, method: "GET"}).done(function(response) {
    var results = response.data;
    console.log(results.length);
    var count = 1;
    for (let j = 0; j < 2; j++) {
      for (var i = 0; i < results.length; i++) {
        imgUrl = results[i].images.fixed_width.url;
        imgUrlstill = 'http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=3864424';

        var princeImg = $('<img>');
        princeImg.attr('class', 'col-xs-4 col-sm-3 col-md-3 col-lg-2 img thumbnail');
        princeImg.attr('src', imgUrlstill).attr('class', 'card img-fluid img-thumbnail').attr('data-state', 'still').attr('data-still', imgUrlstill).attr('data-animate', imgUrl);
        princeImg.attr('id', `gif${count}`);
        $('.container').append(princeImg);
        count++;
      }
    }
    // console.log(imgArr);
  });
  var card1,
    card2,
    lastClicked;

  $(document).on("click", ".card", function() {
    console.log('card1: ', card1, 'card2: ', card2)
    if ($(this).attr('id') == lastClicked) {
      alert("Don't click that twice!");
      card1 = undefined;
      card2 = undefined;
      lastClicked = undefined;
    } else {
      lastClicked = $(this).attr('id');
      if (card1 === undefined) {
        card1 = $(this).attr('data-animate');
        console.log('setting card1: ', card1);
      } else if (card1 != undefined && card2 === undefined) {
        card2 = $(this).attr('data-animate');
        console.log('card1: ', card1, ' ', 'setting card2: ', card2)
        if (card1 === card2) {
          setTimeout(function() {
            alert("MATCH!")
          }, 1000);
          card1 = undefined;
          card2 = undefined;
          lastClicked = undefined;
          imgSrc = $(this).attr('data-animate');
          $('.card').each(function(i, ele) {
            if ($(this).attr('data-animate') == imgSrc) {
              $(this).removeClass('card');
              $(this).addClass('matched');
            }
          });
        } else {
          card1 = undefined;
          card2 = undefined;
          lastClicked = undefined;
        }
      }
    }

    function flipCard() {
        self.attr('src', self.attr('data-still'));
        self.attr('data-state', 'still');
        console.log(self.attr('src'), self.attr('data-state'));
    }
    var self = $(this);
    if (self.attr('data-state') == 'still') {
      self.attr('src', $(this).attr('data-animate'));
      self.attr('data-state', 'animate');
      setTimeout(flipCard, 4000);
    }
  });

  $(document).on("click", ".matched", function(){
    alert('already matched')
  });
};
