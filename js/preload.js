function preload(arrayOfImages) {
    $(arrayOfImages).each(function () {
        $('<img />').attr('src',this).appendTo('body').css('display','none');
    });
}

var preloadImages = [
	'img/google-earth-view-AfarZone2-Ethiopia.jpg',
	'img/google-earth-view-Akjoujt-Mauritania.jpg',
	'img/google-earth-view-Antartica2.jpg',
	'img/google-earth-view-AntonioQuijarro-Bolivia.jpg',
	'img/google-earth-view-AswanGovernorate-Egypt.jpg',
	'img/google-earth-view-Barcelos-Brazil.jpg',
	'img/google-earth-view-Basrah-Iraq.jpg',
	'img/google-earth-view-Birjand-Iran.jpg',
	'img/google-earth-view-CeelDheer-Somalia.jpg',
	'img/google-earth-view-CookIslands.jpg',
	'img/google-earth-view-CopiapoProvince-Chile.jpg',
	'img/google-earth-view-CorpenAikeDepartment-Argentina.jpg',
	'img/google-earth-view-Crete-Greece.jpg',
	'img/google-earth-view-DakhletNouadhibou2-Mauritania.jpg',
	'img/google-earth-view-DavisCounty-US.jpg',
	'img/google-earth-view-Dennehotso2-US.jpg',
	'img/google-earth-view-Deori-India.jpg',
	'img/google-earth-view-DivisionNo18-Canada.jpg',
	'img/google-earth-view-Dorie-NewZealand.jpg',
	'img/google-earth-view-EasternProvince-SaudiArabia.jpg',
	'img/google-earth-view-Ennedi2-Chad.jpg',
	'img/google-earth-view-Fderik2-Mauritania.jpg',
	'img/google-earth-view-Galapagos-Ecuador.jpg',
	'img/google-earth-view-Glynneath-UK.jpg',
	'img/google-earth-view-HaibeiZangzuzizhizhou-China.jpg',
	'img/google-earth-view-HarborSprings-US.jpg',
	'img/google-earth-view-Hardap-Namibia.jpg',
	'img/google-earth-view-Huisduinen-TheNetherlands.jpg',
	'img/google-earth-view-Humahuaca-Argentina.jpg',
	'img/google-earth-view-Iceland.jpg',
	'img/google-earth-view-Iznik-Turkey.jpg',
	'img/google-earth-view-Kailua-Kona-US.jpg',
	'img/google-earth-view-Kasai-DemocraticRepublicoftheCongo.jpg',
	'img/google-earth-view-KaztalDistrict-Kazakhstan.jpg',
	'img/google-earth-view-Kerman-Iran.jpg',
	'img/google-earth-view-Kihei-US.jpg',
	'img/google-earth-view-Kirbati.jpg',
	'img/google-earth-view-Kumarina-Australia.jpg',
	'img/google-earth-view-Lelystad-Netherlands.jpg',
	'img/google-earth-view-LineIslands-Kiribati.jpg',
	'img/google-earth-view-LosAndes2-Argentina.jpg',
	'img/google-earth-view-LosVidrios-Mexico.jpg',
	'img/google-earth-view-MahajangaRural-Madagascar.jpg',
	'img/google-earth-view-Maralinga-Australia.jpg',
	'img/google-earth-view-MarbleCanyon-US.jpg',
	'img/google-earth-view-MariscalNietoProvince-Peru.jpg',
	'img/google-earth-view-marshallislands.jpg',
	'img/google-earth-view-Maunaloa-US.jpg',
	'img/google-earth-view-mauritania.jpg',
	'img/google-earth-view-Mayo-Ireland.jpg',
	'img/google-earth-view-Moindou-NewCaledonia.jpg',
	'img/google-earth-view-Mopti-Mali.jpg',
	'img/google-earth-view-Murzuq-Libya.jpg',
	'img/google-earth-view-Musselburgh-UK.jpg',
	'img/google-earth-view-Mysove-Crimea.jpg',
	'img/google-earth-view-Negaunee-US.jpg',
	'img/google-earth-view-Negaunee.jpg',
	'img/google-earth-view-Nema-Mauritania.jpg',
	'img/google-earth-view-niagra-falls-us.jpg',
	'img/google-earth-view-NorthRim-US.jpg',
	'img/google-earth-view-NothSlope-US.jpg',
	'img/google-earth-view-Noumea-NewCaledonia.jpg',
	'img/google-earth-view-Oman.jpg',
	'img/google-earth-view-Orhangazi-Turkey.jpg',
	'img/google-earth-view-Oshikoto-Namibia.jpg',
	'img/google-earth-view-Ouargla2-Algeria.jpg',
	'img/google-earth-view-Peedamulla-Australia.jpg',
	'img/google-earth-view-ProvinceDeSidiKacem-Morocco.jpg',
	'img/google-earth-view-Purisima-Columbia.jpg',
	'img/google-earth-view-QuesmAlWahatAlKhargah-Egypt.jpg',
	'img/google-earth-view-Renchinlkhumbe-Mongolia.jpg',
	'img/google-earth-view-Rikaze-China.jpg',
	'img/google-earth-view-Rikaze2-China.jpg',
	'img/google-earth-view-Rikaze3-China.jpg',
	'img/google-earth-view-Rombo-Tanzania.jpg',
	'img/google-earth-view-Rybachje-Kazakhstan.jpg',
	'img/google-earth-view-SaintMary-AntiguaandBarbuda.jpg',
	'img/google-earth-view-Salelologa-Samoa.jpg',
	'img/google-earth-view-SaThayDistrict-Vietnam.jpg',
	'img/google-earth-view-South-Iceland2.jpg',
	'img/google-earth-view-South-Iceland3.jpg',
	'img/google-earth-view-SouthEleuthera-TheBahamas.jpg',
	'img/google-earth-view-SurCarangas-Bolivia.jpg',
	'img/google-earth-view-Tanbar-Australia.jpg',
	'img/google-earth-view-Tanganyika-DemocraticRepublicoftheCongo.jpg',
	'img/google-earth-view-Tuvalu.jpg',
	'img/google-earth-view-UrzharDistrict-Kazakhstan.jpg',
	'img/google-earth-view-Uzbekistan.jpg',
	'img/google-earth-view-Vegaoyan-Norway.jpg',
	'img/google-earth-view-VillarinoPartido-Argentina.jpg',
	'img/google-earth-view-Vratarusa-Croatia.jpg',
	'img/google-earth-view-Wangerland-Germany.jpg',
	'img/google-earth-view-WesternSahara.jpg',
	'img/google-earth-view-YellowstonNationalPark-US.jpg',
	'img/google-earth-view-Zapotiltic-Mexico.jpg',
	'img/google-earth-view-Zermatt-Switzerland.jpg',
	'img/google-earth-view-Zug-WesternSahara.jpg'

];

$(window).load(function() {

	preload(preloadImages);

});
















