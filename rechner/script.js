

$(document).ready(function() {
	// when document loaded:

		$('.taste').click(function(){
			let rechnung = $('#ausgabe-rechnung').html();
			let dieses = $(this).html();
			$('#ausgabe-rechnung').html(rechnung + dieses);
		});

		$('#ausgabe-rechnung').click(function(){
			clearAusgabe();
		});

		$('#clear').click(function(){
			clearAusgabe();
		});

		$('#gleich').click(function(){
			let ergebnis = eval($('#ausgabe-rechnung').html());
			let rechnung_alt = $("#ausgabe-rechnung").html();
			$('#ausgabe-ausgabe').html(ergebnis);
			$("#ausgabe-rechnung").html("(" + rechnung_alt + ")");
		})
});


function clearAusgabe(){
	$('#ausgabe-rechnung').html('');
	$('#ausgabe-ausgabe').html('');
}