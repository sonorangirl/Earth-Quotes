//Random Quote Generator


var quotes = [
  {
    quote: "Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.",
    author: "John Muir",
    image: "google-earth-view-marshallislands.jpg",
    where: "Marshall Islands",
    number:'1'
  },
  {
	quote:"The more clearly we can focus our attention on the wonders and realities of the universe about us, the less taste we shall have for destruction.",
	author:"Rachel Carson",
	image:"google-earth-view-Negaunee.jpg",
	where:"Negaunne, United States",
	number:'2'
  },
  {
	quote:"We stand somewhere between the mountain and the ant.",
	author:"Native American (Onondaga) Proverb",
	image:"google-earth-view-MarbleCanyon-US.jpg",
	where:"Marble Canyon, United States",
	number:'3'
  },
  {
	quote:"Not all those who wander are lost.",
	author:"J.R.R. Tolkien",
	image:"google-earth-view-MahajangaRural-Madagascar.jpg",
	where:"Mahajanga Rural, Madagascar",
	number:'4'
  },
  {
	quote:"Humankind's greatest priority is to reintegrate with the natural world.",
	author:"Jonathon Poritt",
	image:"google-earth-view-niagra-falls-us.jpg",
	where:"Niagra Falls, United States",
	number:'5'
  },
  {
	quote:"Our little Spaceship Earth is only eight thousand miles in diameter, which is almost a negligible dimension in the great vastness of space.",
	author:"Buckminster Fuller",
	image:"google-earth-view-Tuvalu.jpg",
	where:"Tuvalu",
	number:'6'
  },
  {
	quote:"Pollution is nothing but resources we're not harvesting. We allow them to disperse because we've been ignorant of their value.",
	author:"Buckminster Fuller",
	image:"google-earth-view-Hardap-Namibia.jpg",
	where:"Hardap, Namibia",
	number:'7'
  },
  {
	quote:"As the traveler who has once been from home is wiser than he who has never left his own doorstep, so a knowledge of one other culture should sharpen our ability to scrutinize more steadily, to appreciate more lovingly, our own",
	author:"Margaret Mead",
	image:"google-earth-view-Noumea-NewCaledonia.jpg",
	where:"Noumea, New Caledonia",
	number:'8'
  },
  {
	quote:"As a people we have developed a life-style that is draining the earth of its priceless and irreplaceable resources without regard for the future of our children and people all around the world.",
	author:"Margaret Mead",
	image:"google-earth-view-Akjoujt-Mauritania.jpg",
	where:"Akjoujt, Mauritania",
	number:'9'
  },
  {
	quote:"You can never have an impact on society if you have not changed yourself.",
	author:"Nelson Mandela",
	image:"google-earth-view-Peedamulla-Australia.jpg",
	where:"Peedamula, Australia",
	number:'10'
  },
  {
	quote:"[We] are the makers of our own state... and individuals who realize the fact need not, ought not, to wait for collective action.",
	author:"Mahatma Gandhi",
	image:"google-earth-view-Orhangazi-Turkey.jpg",
	where:"Orhangazi, Turkey",
	number:'11'
  },
  {
	quote:"Look!  Look!  Look deep into nature and you will understand everything.",
	author:"Albert Einstein",
	image:"google-earth-view-QuesmAlWahatAlKhargah-Egypt.jpg",
	where:"Quesm Al Wahat, Egypt",
	number:'12'
  },
  {
	quote:"Lasting change happens when people see for themselves that a different way of life is more fulfilling than their present one.",
	author:"Eknath Easwaran",
	image:"google-earth-view-Birjand-Iran.jpg",
	where:"Birjand, Iran",
	number:'13'
  },
  {
	quote:"The very process of the restoring the land to health is the process through which we become attuned to Nature and, through Nature, with ourselves.",
	author:"Chris Maser",
	image:"google-earth-view-SaThayDistrict-Vietnam.jpg",
	where:"Sa Thay District, Vietnam",
	number:'14'
  },
  {
	quote:"I know of no restorative of heart, body, and soul more effective against hopelessness than the restoration of the Earth.",
	author:"Barry Lopez",
	image:"google-earth-view-Kumarina-Australia.jpg",
	where:"Kumarina, Australia",
	number:'15'
  },
  {
	quote:"There can be no purpose more enspiriting than to begin the age of restoration, reweaving the wondrous diversity of life that still surrounds us.",
	author:"Edward O. Wilson",
	image:"google-earth-view-CeelDheer-Somalia.jpg",
	where:"Ceel Dheer, Somalia",
	number:'16'
  },
  {
	quote:"We will never know how unique we really are until we begin to act as humanely as we are able.",
	author:"Catherine Roberts",
	image:"google-earth-view-CopiapoProvince-Chile.jpg",
	where:"Copiapo Province, Chile",
	number:'17'
  },
  {
	quote:"Until he extends the circle of his compassion to all living things, man will not himself find peace.",
	author:"Albert Schweitzer",
	image:"google-earth-view-Deori-India.jpg",
	where:"Deori, India",
	number:'18'
  },
  {
	quote:"Human nature will find itself only when it fully realizes that to be human it has to cease to be beastly or brutal.",
	author:"Mahatma Gandhi",
	image:"google-earth-view-KaztalDistrict-Kazakhstan.jpg",
	where:"Kaztal District, Kazakhstan",
	number:'19'
  },
  {
	quote:"We have forgotten the earth, forgotten it in the sense that we fail to regard it as a source of our life.",
	author:"Fairfield Osborn",
	image:"google-earth-view-Fderik2-Mauritania.jpg",
	where:"Fderik, Mauritania",
	number:'20'
  },
  {
	quote:"What we lack is intellectual and emotional acceptance of the fact that humanity is materially dependent on nature and that nature's productive capacity is limited.",
	author:"Mathis Wackernagel and William Rees",
	image:"google-earth-view-CookIslands.jpg",
	where:"Cook Islands",
	number:'21'
  },
  {
	quote:"The real survivors are the Earth inhabitants that have lived millions of years without consuming their ecological capital, the base from which all abundance flows.",
	author:"Janine M. Benyus",
	image:"google-earth-view-CorpenAikeDepartment-Argentina.jpg",
	where:"Corpen Aike Department, Argentina",
	number:'22'
  },
  {
	quote:"The mistakes that are made now are made for all time.",
	author:"Rachel Carson",
	image:"google-earth-view-EasternProvince-SaudiArabia.jpg",
	where:"Eastern Province, Saudi Arabia",
	number:'23'
  },
  {
	quote:"The frog does not drink up the pond in which he lives.",
	author:"Sioux Indian Proverb",
	image:"google-earth-view-Galapagos-Ecuador.jpg",
	where:"Galapagos, Ecuador",
	number:'24'
  },
  {
	quote:"The first law of ecology is that everything is related to everything else.",
	author:"Barry Commoner",
	image:"google-earth-view-Glynneath-UK.jpg",
	where:"Glynneath, United Kingdom",
	number:'25'
  },
  {
	quote:"Our most serious problem, perhaps, is that we have become a nation of fantasists.  We believe, apparently, in the infinite availability of finite resources.",
	author:"Wendell Berry",
	image:"google-earth-view-Ennedi2-Chad.jpg",
	where:"Ennedi, Chad",
	number:'26'
  },
  {
	quote:"Nature is an endless combination and repetition of a very few laws. She hums the old well-known air through innumerable variations.",
	author:"Ralph Waldo Emerson",
	image:"google-earth-view-Uzbekistan.jpg",
	where:"Uzbekistan",
	number:'27'
  },
  {
	quote:"It may not be irrelevant to note that even very modest forms of life, like earthworms, dung beetles and fiddler crabs, have no trouble identifying the real problems they must deal with if they are to survive.",
	author:"Edward Goldsmith",
	image:"google-earth-view-Kerman-Iran.jpg",
	where:"Kerman, Iran",
	number:'28'
  },
  {
	quote:"Cooperation for mutual benefit, a survival strategy very common in natural systems, is one that humanity needs to emulate.",
	author:"Eugene Odum",
	image:"google-earth-view-South-Iceland3.jpg",
	where:"South Iceland",
	number:'29'
  },
  {
	quote:"We need to understand ourselves as biological creatures at one with the diversity of all life.  When we can truly see this unity and interdependence, we will find nature to be forgiving, generous, and resilient.",
	author:"Kenny Ausubel",
	image:"google-earth-view-NothSlope-US.jpg",
	where:"North Slope, United States",
	number:'30'
  },
  {
	quote:"It is only on the condition of humility and reverence before the world that our species will be able to remain in it.",
	author:"Wendell Berry",
	image:"google-earth-view-Zug-WesternSahara.jpg",
	where:"Zug, Western Sahara",
	number:'31'
  },
  {
	quote:"Never does nature say one thing and wisdom another.",
	author:"Juvenal, Satires",
	image:"google-earth-view-Salelologa-Samoa.jpg",
	where:"Salelologa, Samoa",
	number:'32'
  },
  {
	quote:"Listen to the voice of nature, for it holds treasures for you.",
	author:"Native American (Huron) Proverb",
	image:"google-earth-view-Purisima-Columbia.jpg",
	where:"Purisima, Columbia",
	number:'33'
  },
  {
	quote:"If we are willing to be still and open enough to listen, wilderness itself will teach us.",
	author:"Steven Harper",
	image:"google-earth-view-Dorie-NewZealand.jpg",
	where:"Dorie, New Zealand",
	number:'34'
  },
  {
	quote:"When man moves away from nature his heart becomes hard.",
	author:"Native American (Lakota) Proverb",
	image:"google-earth-view-mauritania.jpg",
	where:"Mauritania",
	number:'35'
  },
  {
	quote:"The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience.",
	author:"Eleanor Roosevelt",
	image:"google-earth-view-Crete-Greece.jpg",
	where:"Crete, Greece",
	number:'36'
  },
  {
	quote:"One way to get the most out of life is to look upon it as an adventure.",
	author:"William Feather",
	image:"google-earth-view-Kirbati.jpg",
	where:"Kirbati",
	number:'37'
  },
  {
	quote:"Adventure is worthwhile in itself.",
	author:"Amelia Earhart",
	image:"google-earth-view-SouthEleuthera-TheBahamas.jpg",
	where:"South Eleuthera, The Bahamas",
	number:'38'
  },
  {
	quote:"Blessed are the curious, for they shall have adventures.",
	author:"Lovelle Drachman",
	image:"google-earth-view-Renchinlkhumbe-Mongolia.jpg",
	where:"Renchinlkhumbe, Mongolia",
	number:'39'
  },
  {
	quote:"Life is either a great adventure or nothing.",
	author:"Helen Keller",
	image:"google-earth-view-VillarinoPartido-Argentina.jpg",
	where:"Villarino Partido, Argentina",
	number:'40'
  },
  {
	quote:"It is only in adventure that some people succeed in knowing themselves — in finding themselves.",
	author:"Andre Gide",
	image:"google-earth-view-HaibeiZangzuzizhizhou-China.jpg",
	where:"Haibei Zangzuzizhizhou, China",
	number:'41'
  },
  {
	quote:"I haven’t been everywhere, but it’s on my list.",
	author:"Susan Sontag",
	image:"google-earth-view-DakhletNouadhibou2-Mauritania.jpg",
	where:"Dakhlet Nouadhibou, Mauritania",
	number:'42'
  },
  {
	quote:"The world is a book and those who do not travel read only one page.",
	author:"St. Augustine",
	image:"google-earth-view-Rikaze-China.jpg",
	where:"Rikaze, China",
	number:'43'
  },
  {
	quote:"All journeys have secret destinations of which the traveler is unaware.",
	author:"Martin Buber",
	image:"google-earth-view-HarborSprings-US.jpg",
	where:"Harbor Springs, United States",
	number:'44'
  },
  {
	quote:"To travel is to discover that everyone is wrong about other countries.",
	author:"Aldous Huxley",
	image:"google-earth-view-UrzharDistrict-Kazakhstan.jpg",
	where:"Urzhar District, Kazakhstan",
	number:'45'
  },
  {
	quote:"Do not follow where the path may lead. Go instead where there is no path and leave a trail.",
	author:"Ralph Waldo Emerson",
	image:"google-earth-view-Vratarusa-Croatia.jpg",
	where:"Vratarusa, Croatia",
	number:'46'
  },
  {
	quote:"If you come to a fork in the road, take it.",
	author:"Yogi Berra",
	image:"google-earth-view-Humahuaca-Argentina.jpg",
	where:"Humahuaca, Argentina",
	number:'47'
  },
  {
	quote:"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
	author:"Mark Twain",
	image:"google-earth-view-SaintMary-AntiguaandBarbuda.jpg",
	where:"Saint Mary, Antigua and Barbuda",
	number:'48'
  },
  {
	quote:"Travel makes one modest, you see what a tiny place you occupy in the world.",
	author:"Gustave Flaubert",
	image:"google-earth-view-Vegaoyan-Norway.jpg",
	where:"Vegaoyan, Norway",
	number:'49'
  },
  {
	quote:"You cannot discover new oceans unless you have the courage to lose sight of the shore.",
	author:"Andre Gide",
	image:"google-earth-view-Iznik-Turkey.jpg",
	where:"Iznik, Turkey",
	number:'50'
  },
  {
	quote:"The best journeys in life are those that answer questions you never thought to ask.",
	author:"Rich Ridgeway",
	image:"google-earth-view-Iceland.jpg",
	where:"Iceland",
	number:'51'
  },
  {
	quote:"It’s a dangerous business, Frodo, going out your door. You step onto the road, and if you don’t keep your feet, there’s no knowing where you might be swept off to.",
	author:"J.R.R. Tolkien",
	image:"google-earth-view-Barcelos-Brazil.jpg",
	where:"Barcelos, Brazil",
	number:'52'
  },
  {
	quote:"When you set out on your journey..., pray that the road is long, full of adventure, full of knowledge.",
	author:"Constantine P. Cavafy",
	image:"google-earth-view-Rikaze2-China.jpg",
	where:"Rikaze, China",
	number:'53'
  },
  {
	quote:"Don’t die without embracing the daring adventure your life is meant to be.",
	author:"Steve Pavlina",
	image:"google-earth-view-Maunaloa-US.jpg",
	where:"Maunaloa, United States",
	number:'54'
  },
  {
	quote:"A man does not climb a mountain without bringing some of it away with him, and leaving something of himself upon it.",
	author:"Sir Martin Conway",
	image:"google-earth-view-Zermatt-Switzerland.jpg",
	where:"Zermatt, Switzerland",
	number:'55'
  },
  {
	quote:"And forget not that the earth delights to feel your bare feet and the winds long to play with your hair.",
	author:"Kahlil Gibran",
	image:"google-earth-view-Tanganyika-DemocraticRepublicoftheCongo.jpg",
	where:"Tanganyika, Democratic Republic of the Congo",
	number:'56'
  },
  {
	quote:"If one way be better than another, that you may be sure is Nature's way.",
	author:"Aristotle",
	image:"google-earth-view-Nema-Mauritania.jpg",
	where:"Nema, Mauritania",
	number:'57'
  },
  {
	quote:"Those who dwell among the beauties and mysteries of the earth are never alone or weary of life.",
	author:"Rachel Carson",
	image:"google-earth-view-Rikaze3-China.jpg",
	where:"China",
	number:'58'
  },
  {
	quote:"The creation of a thousand forests is in one acorn.",
	author:"Ralph Waldo Emerson",
	image:"google-earth-view-NorthRim-US.jpg",
	where:"North Rim, United States",
	number:'59'
  },
  {
	quote:"He who plants a tree plants hope.",
	author:"Lucy Larcom",
	image:"google-earth-view-Wangerland-Germany.jpg",
	where:"Wangerland, Germany",
	number:'60'
  },
  {
	quote:"The struggle to save the global environment is in one way much more difficult than the struggle to vanquish Hitler, for this time the war is with ourselves. We are the enemy, just as we have only ourselves as allies.",
	author:"Al Gore",
	image:"google-earth-view-Oman.jpg",
	where:"Oman",
	number:'61'
  },
  {
	quote:"We never know the worth of water till the well is dry.",
	author:"Thomas Fuller",
	image:"google-earth-view-LosVidrios-Mexico.jpg",
	where:"Los Vidrios, Mexico",
	number:'62'
  },
  {
	quote:"Sustainable development is the masterful balance of meeting our own needs without jeopardizing future generations' ability to do the same.",
	author:"Unknown",
	image:"google-earth-view-Moindou-NewCaledonia.jpg",
	where:"Moindou, New Caledonia",
	number:'63'
  },
  {
	quote:"We do not inherit the Earth from our ancestors, we borrow it from our children.",
	author:"Native American Proverb",
	image:"google-earth-view-Maralinga-Australia.jpg",
	where:"Maralinga, Australia",
	number:'64'
  },
  {
	quote:"Sustainability, ensuring the future of life on Earth, is an infinite game, the endless expression of generosity on behalf of all.",
	author:"Paul Hawken",
	image:"google-earth-view-WesternSahara.jpg",
	where:"Western Sahara",
	number:'65'
  },
  {
	quote:"Sustainability is the key to our survival on this planet and will also determine success on all levels.",
	author:"Shari Arison",
	image:"google-earth-view-SurCarangas-Bolivia.jpg",
	where:"Sur Carangas, Bolivia",
	number:'66'
  },
  {
	quote:"Resilience is all about being able to overcome the unexpected. Sustainability is about survival. The goal of resilience is to thrive.",
	author:"Jamais Cascio",
	image:"google-earth-view-Murzuq-Libya.jpg",
	where:"Murzuq, Libya",
	number:'67'
  },
  {
	quote:"In the 21st century, I think the heroes will be the people who will improve the quality of life, fight poverty and introduce more sustainability.",
	author:"Bertrand Piccard",
	image:"google-earth-view-Antartica2.jpg",
	where:"Antartica",
	number:'68'
  },
  {
	quote:"The first rule of sustainability is to align with natural forces, or at least not try to defy them.",
	author:"Paul Hawken",
	image:"google-earth-view-Ouargla2-Algeria.jpg",
	where:"Ouargla, Algeria",
	number:'69'
  },
  {
	quote:"I just happen to think that in life we need to be a little like the farmer, who puts back into the soil what he takes out.",
	author:"Paul Newman",
	image:"google-earth-view-LineIslands-Kiribati.jpg",
	where:"Line Islands, Kirbati",
	number:'70'
  },
  {
	quote:"People 'over-produce' pollution because they are not paying for the costs of dealing with it.",
	author:"Ha-Joon Chang",
	image:"google-earth-view-Negaunee-US.jpg",
	where:"Negaunne, United States",
	number:'71'
  },
  {
	quote:"The greatest shortcoming of the human race is our inability to understand the exponential function.",
	author:"Albert A. Bartlett",
	image:"google-earth-view-Mayo-Ireland.jpg",
	where:"Mayo, Ireland",
	number:'72'
  },
  {
	quote:"If we are going to start calling industrial corn sustainable, then we might as well say that petroleum is a renewable resource if you're willing to wait long enough.",
	author:"Catherine Friend",
	image:"google-earth-view-Kasai-DemocraticRepublicoftheCongo.jpg",
	where:"Kasai, Democratic Republic of the Congo",
	number:'73'
  },
  {
	quote:"What is the use of a house if you don’t have a decent planet to put it on?",
	author:"Henry David Thoreau",
	image:"google-earth-view-South-Iceland2.jpg",
	where:"South Iceland",
	number:'74'
  },
  {
	quote:"What we are doing to the forests of the world is but a mirror reflection of what we are doing to ourselves and to one another.",
	author:"Mahatma Gandhi",
	image:"google-earth-view-Basrah-Iraq.jpg",
	where:"Basrah, Iraq",
	number:'75'
  },
  {
	quote:"When one tugs at a single thing in nature, he finds it attached to the rest of the world.",
	author:"John Muir",
	image:"google-earth-view-Mopti-Mali.jpg",
	where:"Mopti, Mali",
	number:'76'
  },
  {
	quote:"Humankind has not woven the web of life. We are but one thread within it. Whatever we do to the web, we do to ourselves.",
	author:"Chief Seattle",
	image:"google-earth-view-Rombo-Tanzania.jpg",
	where:"Rombo, Tanzania",
	number:'77'
  },
  {
	quote:"He who knows what sweets and virtues are in the ground, the waters, the plants, the heavens, and how to come at these enchantments, is the rich and royal man.",
	author:"Ralph Waldo Emerson",
	image:"google-earth-view-DivisionNo18-Canada.jpg",
	where:"Division No. 18, Canada",
	number:'78'
  },
  {
	quote:"We abuse land because we regard it as a commodity belonging to us. When we see land as a community to which we belong, we may begin to use it with love and respect.",
	author:"Aldo Leopold",
	image:"google-earth-view-Zapotiltic-Mexico.jpg",
	where:"Zapotiltic, Mexico",
	number:'79'
  },
  {
	quote:"We are living on this planet as if we had another one to go to. ",
	author:"Terri Swearingen",
	image:"google-earth-view-Musselburgh-UK.jpg",
	where:"Musselburgh, United Kingdom",
	number:'80'
  },
  {
	quote:"One planet, one experiment.",
	author:"Edward O. Wilson",
	image:"google-earth-view-Mysove-Crimea.jpg",
	where:"Mysove, Crimea",
	number:'81'
  },
  {
	quote:"The proper use of science is not to conquer nature but to live in it.",
	author:"Barry Commoner",
	image:"google-earth-view-MariscalNietoProvince-Peru.jpg",
	where:"Mariscal Nieto Province, Peru",
	number:'82'
  },
  {
	quote:"Plans to protect air and water, wilderness and wildlife are in fact plans to protect man.",
	author:"Stewart Udall",
	image:"google-earth-view-Kailua-Kona-US.jpg",
	where:"Kailua-Kona, United States",
	number:'83'
  },
  {
	quote:"Conservation is a state of harmony between men and land.",
	author:"Aldo Leopold",
	image:"google-earth-view-Lelystad-Netherlands.jpg",
	where:"Lelystad, Netherlands",
	number:'84'
  },
  {
	quote:"Problems cannot be solved at the same level of awareness that created them.",
	author:"Albert Einstein",
	image:"google-earth-view-AntonioQuijarro-Bolivia.jpg",
	where:"Antonio Quijarro, Bolivia",
	number:'85'
  },
  {
	quote:"Anything else you're interested in is not going to happen if you can't breathe the air and drink the water. Don't sit this one out. Do something.",
	author:"Carl Sagan",
	image:"google-earth-view-Tanbar-Australia.jpg",
	where:"Tanbar, Australia",
	number:'86'
  },
  {
	quote:"The battle we have fought, and are still fighting, for the forests is a part of the eternal conflict between right and wrong.",
	author:"John Muir",
	image:"google-earth-view-YellowstonNationalPark-US.jpg",
	where:"Yellowstone National Park, United States",
	number:'87'
  },
  {
	quote:"You have to hold yourself accountable for your actions, and that's how we're going to protect the Earth.",
	author:"Julia Butterfly Hill",
	image:"google-earth-view-Kihei-US.jpg",
	where:"Kihei, United States",
	number:'88'
  },
  {
	quote:"Out of all those millions and millions of planets floating around there in space, this is our planet, this is our little one, so we've just got to be aware of it and take care of it.",
	author:"Paul McCartney",
	image:"google-earth-view-Rybachje-Kazakhstan.jpg",
	where:"Rybachje, Kazakhstan",
	number:'89'
  },
  {
	quote:"A nation that destroys its soils destroys itself.",
	author:"Franklin D. Roosevelt",
	image:"google-earth-view-LosAndes2-Argentina.jpg",
	where:"Los Andes, Argentina",
	number:'90'
  },
  {
	quote:"It was not until we saw the picture of the earth, from the moon, that we realized how small and how helpless this planet is - something that we must hold in our arms and care for.",
	author:"Margaret Mead",
	image:"google-earth-view-Oshikoto-Namibia.jpg",
	where:"Oshikoto, Namibia",
	number:'91'
  },
  {
	quote:"It is a curious situation that the sea, from which life first arose, should now be threatened by the activities of one form of that life.",
	author:"Rachel Carson",
	image:"google-earth-view-ProvinceDeSidiKacem-Morocco.jpg",
	where:"Province de Sidi Kacem, Morocco",
	number:'92'
  },
  {
	quote:"The sun, with all those planets revolving around it and dependent on it, can still ripen a bunch of grapes as if it had nothing else in the universe to do.",
	author:"Galileo",
	image:"google-earth-view-Dennehotso2-US.jpg",
	where:"Dennehotso, United States",
	number:'93'
  },
  {
	quote:"We can never have enough of Nature.",
	author:"Henry David Thoreau",
	image:"google-earth-view-AswanGovernorate-Egypt.jpg",
	where:"Aswan Governorate, Egypt",
	number:'94'
  },
  {
	quote:"I have no other wish than a close fusion with nature and I desire no other fate than to have worked and lived in harmony with her laws.",
	author:"Claude Monet",
	image:"google-earth-view-DavisCounty-US.jpg",
	where:"Davis County, United States",
	number:'95'
  },
  {
	quote:"The natural environment sustains the life of all beings universally. ",
	author:"Dalai Lama",
	image:"google-earth-view-AfarZone2-Ethiopia.jpg",
	where:"Afar Zone 2, Ethiopia",
	number:'96'
  },
  {
	quote:"The Earth is what we all have in common.",
	author:"Wendell Berry",
	image:"google-earth-view-Huisduinen-TheNetherlands.jpg",
	where:"Huisduinen, Netherlands",
	number:'97'
  }
 
];



function getNewQuote() {

	//Randomly select one group from the array
	var random = quotes[Math.floor(Math.random() * quotes.length)];

	var quoteHTML = random.quote;
	var authorHTML = "-" + random.author;
	var imageHTML = random.image;
	var locationHTML = random.where;
	var numberHTML = random.number;
	var picRefresh = '?' + numberHTML;
	var urlRefresh = 'vers' + numberHTML;


	//For changing Twitter quote source
	var baseTweet = "https://twitter.com/intent/tweet?url=http%3A%2F%2Fsonorangirl.github.io%2FEarth-Quotes%2F%23&text=";
	var newText = "'" + quoteHTML + "' " + authorHTML;
	var encoded = encodeURI(newText);
	var customTweet = baseTweet + encoded;

	
	$(document).ready(function() {
		$('#quote').fadeOut(800, function(){ $('#quote').html(quoteHTML).fadeIn(800); });
		$('#speaker').fadeOut(800, function(){ $('#speaker').html(authorHTML).fadeIn(800); });
		$('#location').fadeOut(800, function(){ $('#location').html(locationHTML).fadeIn(800); });

		$('body').css('background', 'url(img/' + imageHTML + ') no-repeat center center fixed');

		$('meta[property="og:url"]').attr('content', 'http://sonorangirl.github.io/Earth-Quotes/#' + urlRefresh);
		$('meta[property="og:description"]').attr('content', 'Location: ' + locationHTML);
		$('meta[property="og:image"]').attr('content', 'http://sonorangirl.github.io/Earth-Quotes/img/' + imageHTML + picRefresh);

		
		$('.tweet > a').attr('href', customTweet);

	});

}





