$(function() {
	window.setInterval(function(){
		$( "video" ).parents(".userContentWrapper").html("<div class='container'>Removed video</div>");
		$( ".uiStreamSponsoredLink").parents(".userContentWrapper").html("<div class='container'>Removed sponsored link</div>");
	}, 1000);
});

