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
    for (let j = 0; j < 2; j++) {
      for (var i = 0; i < results.length; i++) {
        imgUrl = results[i].images.fixed_height.url;
        imgUrlstill = 'http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=3864424';

        // var container = $('div');
        // container.attr('class', 'container');
        // var row = $('row');
        // row.attr('class', 'row');
        // var princeDiv = $('div');
        var princeImg = $('<img>');
        princeImg.attr('class', 'col-xs-4 col-sm-3 col-md-3 col-lg-2.5 img thumbnail');
        princeImg.attr('src', imgUrlstill).attr('class', 'card img-fluid img-thumbnail').attr('data-state', 'still').attr('data-still', imgUrlstill).attr('data-animate', imgUrl);

        $('.container').append(princeImg);
        // row.append(princeDiv);
        // $('container').append(row);

        // imgArr.push(princeDiv);
      }
    }
    // console.log(imgArr);
  });
  var card1, card2;
  $(document).on("click", ".card", function() {
    console.log('card1: ',card1,'card2: ',card2)

    if(card1===undefined){
      card1= $(this).attr('data-animate');
      console.log('setting card1: ',card1);
    }else if(card1 != undefined && card2=== undefined){
      card2 = $(this).attr('data-animate');
      console.log('card1: ',card1,' ','setting card2: ',card2)
      if( card1 === card2){
        console.log('match!');
        card1=undefined;
        card2=undefined;
      }else{
        card1=undefined;
        card2=undefined;
      }
    }

//TODO use set timeout to set state to animate for 3 seconds;
    var state = $(this).attr('data-state');

    if ($(this).attr('data-state') == 'still') {
      $(this).attr('src', $(this).attr('data-animate'));
      $(this).attr('data-state', 'animate');
    } else {
      $(this).attr('src', $(this).attr('data-still'));
      $(this).attr('data-state', 'still');
    }
  });
};
