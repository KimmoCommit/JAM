$(function(){

	$(".kansio-puu-merkki").click(function(e){
		e.preventDefault();
		var id = $(this).closest(".kansio-puu-linkki").attr("href");
		$(".kansio-kontti").hide();
		$(".kansio-puu-merkki").removeClass("aktiivinen");
		$(this).addClass("aktiivinen");
		$(id).show();

		var kategoria = $("div"+id).children(".alikansio-kategoria").text();

		if($(this).hasClass("home") === true) {
			$(".index-kontti").show();
			$(".polku1").html('<div class="polku-osa">' + $(this).text() + '</div>');

		} else if(kategoria.length < 0 || kategoria.length == 0) {
				$(".polku").html('<div class="polku-osa">' + $(this).text() + '</div>');
			}
			else {
				$(".polku").html('<div class="polku-osa">' + kategoria.trim() +  '</div>' + '<div class="polku-osa">' + $(this).text().trim() + '</div>');
			
			}

	

	});
});

