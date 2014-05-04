$(function(){
	$(".kansio-puu-linkki").click(function(e){
		e.preventDefault();
		var thisDataCategory = $(this).attr("data-category");
		$('.kansio-puu-linkki[data-category='+thisDataCategory+']').show();
	});
});

$(function(){

	$(".kansio-puu-merkki").click(function(e){
		e.preventDefault();
		var id = $(this).closest(".kansio-puu-linkki").attr("href");
		var thisDataCategory = $(this).attr("data-category");
		$(".kansio-kontti").hide();
		$(".kansio-puu-merkki").removeClass("aktiivinen");
		$(this).addClass("aktiivinen");
		$(id).show();
		$(".alikansio-puu-linkki").hide();
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

