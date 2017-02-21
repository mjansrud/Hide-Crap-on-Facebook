$(function() {
	
	var main = false;
	var videos = true;
	var pages = true;
	var sponsored = true;
	
	//Fetch variables from cloud - syncs between devices - insert new values if we have a new user
	chrome.storage.sync.get(function (result) {
		if($.isEmptyObject(result)){
			chrome.storage.sync.set({
				main: main,
				videos: videos,
				pages: pages,
				sponsored: sponsored
			});
		}else{
			main = result.main;
			videos = result.videos;
			pages = result.pages;
			sponsored = result.sponsored;
		}
	});
	
	function htmlWrapper(type, event){
		return "<div class='toggle-container'><div class='left'>Removed " + type + " from " + event + "</div><div class='right'><div id='show'>" + htmlShowButton() + "</div></div></div>";
	}
	
	function htmlShowButton(){
		return "Show <img height='10px' src='" + chrome.extension.getURL('down.png') + "' />";
	}
	
	function htmlHideButton(){
		return "Hide <img height='10px' src='" + chrome.extension.getURL('up.png') + "' />"; 
	} 
	
	function routine(type, selector){
	
		$( selector ).each(function() { 
			var wrapper = $( this ).closest(".fbUserContent");
			if (! $( wrapper ).hasClass( "added" ) ) { 		
				var event_wrapper = $( wrapper ).find(".fwb");
				var event_content = $( event_wrapper ).html();
				$( wrapper ).addClass("added");
				$( wrapper ).before(htmlWrapper(type, event_content));  
				$( wrapper ).hide("fast");
				
				if(main){
					var post = $( wrapper ).closest("._4-u2");	
					$( post ).hide("fast");
				}
				
			} 
		});
	}

	$(document.body).on('click', '#show', function () { 
		$(this).parents(".toggle-container").next().show("slow"); 
		$(this).html(htmlHideButton());
		$(this).attr('id','hide');
	}); 
	
	$(document.body).on('click', '#hide', function () { 
		$(this).parents(".toggle-container").next().hide("slow"); 
		$(this).html(htmlShowButton());
		$(this).attr('id','show');
	}); 
	
	window.setInterval(function(){
		
		console.log("Hide Crap on Facebook - Routine running");
	
		if(sponsored){
			routine("sponsored link", ".uiStreamSponsoredLink");
		}
		if(pages){
			routine("fan page", ".uiLikePageButton");  
		}
		if(videos){
			routine("video" , "video");
		}
		
	}, 1000); 
	
	console.log("Hide Crap on Facebook - Loading complete");
	
});

