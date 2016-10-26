$(function() {
	
	function htmlWrapper(type, event){
		return "<div class='container'><div class='left'>Removed " + type + " from " + event + "</div><div class='right'><div id='show'>" + htmlShowButton() + "</div></div></div>";
	}
	
	function htmlShowButton(){
		return "Show &#11167;";
	}
	
	function htmlHideButton(){
		return "Hide &#11165;"; 
	}
	
	function routine(type, selector){
	
		$( selector ).each(function() {
			var wrapper = $( this ).closest(".userContentWrapper");
			var event_wrapper = $( wrapper ).find(".fwb");
			var event_content = $( event_wrapper ).html();
			if (! $( wrapper ).hasClass( "added" ) ) { 
				$( wrapper ).addClass("added");
				$( wrapper ).before(htmlWrapper(type, event_content)); 
				$( wrapper ).hide("fast");
			}
		});
	}

	$(document.body).on('click', '#show', function () { 
		$(this).parents(".container").next().show("slow"); 
		$(this).html(htmlHideButton());
		$(this).attr('id','hide');
	}); 
	
	$(document.body).on('click', '#hide', function () { 
		$(this).parents(".container").next().hide("slow"); 
		$(this).html(htmlShowButton());
		$(this).attr('id','show');
	}); 
	
	window.setInterval(function(){
	
		routine("sponsored link", ".uiStreamSponsoredLink");
		routine("video" , "video");
		
	}, 1000);
	
});

