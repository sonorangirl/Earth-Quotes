//Random Quote Generator


var quotes = [
  {
    quote: "Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.",
    author: "John Muir",
    image: "google-earth-view-marshallislands.jpg",
    where: "Marshall Islands"
  },
  {
	quote:"The more clearly we can focus our attention on the wonders and realities of the universe about us, the less taste we shall have for destruction.",
	author:"Rachel Carson",
	image:"google-earth-view-Negaunee.jpg",
	where:"Negaunne, United States"
  },
  {
	quote:"We stand somewhere between the mountain and the ant.",
	author:"Native American Proverb",
	image:"google-earth-view-lakeshore-us.jpg",
	where:"Lakeshore, United States"
  },
  {
	quote:"Not all those who wander are lost.",
	author:"J.R.R. Tolkien",
	image:"Australia.jpg",
	where:"Peedamulla, Australia"
  }
 
];



function getNewQuote() {

	//Randomly select one group from the array
	var random = quotes[Math.floor(Math.random() * quotes.length)];

	var quoteHTML = random.quote;
	var authorHTML = "-" + random.author;
	var imageHTML = random.image;
	var locationHTML = random.where;

	// document.getElementById('quote').innerHTML = quoteHTML;
	// document.getElementById('speaker').innerHTML = authorHTML;
	// document.body.style.background = "url(img/" + imageHTML + ") no-repeat center center fixed";
	
	$(document).ready(function() {
		$('#quote').fadeOut(800, function(){ $('#quote').html(quoteHTML).fadeIn(800); });
		$('#speaker').fadeOut(800, function(){ $('#speaker').html(authorHTML).fadeIn(800); });
		$('#location').fadeOut(800, function(){ $('#location').html(locationHTML).fadeIn(800); });

		$('body').css('background', 'url(img/' + imageHTML + ') no-repeat center center fixed');
	});


}



