
$(function(){
	$(".kansio-kontti").each(function(){
		if($(this).hasClass("alikansio")) {
								//var alikansionOtsikko = $(this).children(".alikansio-otsikko").text().trim();
								var thisText = $(this).children(".alikansio-otsikko").text().trim();
								var thisTrimmerText = $(this).children(".alikansio-otsikko").text().replace(/ /g, '').trim();
								var Class="kansio-puu-linkki";

								var kansioKategoria = $(this).children(".alikansio-kategoria").text().trim();

								$(this).attr("id",thisTrimmerText);
								$(".kansio-puu-ul").append('<a href="#' + thisTrimmerText + '" data-category="' + kansioKategoria + '" class="' + Class + ' alikansio-puu-linkki ' + kansioKategoria + '"><li><div class="kansio-puu-merkki kansio-puu-alimerkki">'+thisText+'</div></li></a>'); 
							}
							//if-lause on tässä välttämätön!
							else if($(this).children(".kansio-otsikko").text().length > 0){
								var thisText = $(this).children(".kansio-otsikko").text().trim();
								var thisTrimmerText = $(this).children(".kansio-otsikko").text().replace(/ /g, '').trim();
								var Class="kansio-puu-linkki";
								$(this).attr("id",thisTrimmerText);
								$(".kansio-puu-ul").append('<a href="#' + thisTrimmerText + '" data-category="' + thisTrimmerText + '" class="' + Class + ' ylikansio"><li><div class="kansio-puu-merkki">'+thisText+'</div></li></a>'); 
							}
							else {
								return;	
							}
						});
});




