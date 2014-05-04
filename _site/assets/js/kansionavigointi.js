$(function(){
	$(".ylikansio").click(function(e){
		e.preventDefault();
		var thisDataCategory = $(this).attr("data-category");

		if($(this).hasClass("auki") === false) {
			$('.kansio-puu-linkki[data-category='+thisDataCategory+']').show();
			$(this).addClass("auki");
		}
		else if ($(this).hasClass("auki") === true ) {
			$('.alikansio-puu-linkki[data-category='+thisDataCategory+']').hide();
			$(this).removeClass("auki");
		}
	});
});


$(function(){

	$(".kansio-puu-merkki").click(function(e){
		e.preventDefault();
		var id = $(this).closest(".kansio-puu-linkki").attr("href");
		var thisDataCategory = $(this).attr("data-category");
		$(".kansio-kontti").hide();
		$(".kansio-puu-merkki").removeClass("aktiivinen");
		$(".kansio-puu-merkki").removeClass("auki-merkki");
		$(this).addClass("aktiivinen");
		$(id).show();
		//$(".alikansio-puu-linkki").hide();
		var alikategoria = $("div"+id).children(".alikansio-kategoria").text();
		if($(this).hasClass("home") === true) {
			$(".index-kontti").show();
			$(".polku1").html('<div class="polku-osa">' + $(this).text() + '</div>');
		} 

		else if(alikategoria.length < 0 || alikategoria.length == 0) {
			$(".polku").html('<div class="polku-osa">' + $(this).text() + '</div>');
		}
		else {
			$(".polku").html('<div class="polku-osa">' + alikategoria.trim() +  '</div>' + '<div class="polku-osa">' + $(this).text().trim() + '</div>');

		}
	});
});

