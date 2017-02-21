$(function() {
	chrome.storage.sync.get(function (result) {
		$('#main').prop('checked', result.main).change();
		$('#videos').prop('checked', result.videos).change();
		$('#pages').prop('checked', result.pages).change();
		$('#sponsored').prop('checked', result.sponsored).change();
		$('#main').change(function() {		
			chrome.storage.sync.set({
				main: $(this).prop('checked')
			}, function() {
				$("#success").slideDown("fast");	
				setTimeout(function() {
					$("#success").slideUp("fast");	
				}, 1000);
			});
		})
		$('#videos').change(function() {
			chrome.storage.sync.set({
				videos: $(this).prop('checked')
			}, function() {
				$("#success").slideDown("fast");	
				setTimeout(function() {
					$("#success").slideUp("fast");	
				}, 1000);
			});
		}) 
		$('#pages').change(function() {
			chrome.storage.sync.set({
				pages: $(this).prop('checked')
			}, function() {
				$("#success").slideDown("fast");	
				setTimeout(function() {
					$("#success").slideUp("fast");	
				}, 1000);
			});
		})
		$('#sponsored').change(function() {
			chrome.storage.sync.set({
				sponsored: $(this).prop('checked')
			}, function() {
				$("#success").slideDown("fast");	
				setTimeout(function() {
					$("#success").slideUp("fast");	
				}, 1000);
			}); 
		}) 
	}); 
	//$("canvas").width($(".container-game").width());
	//$("canvas").height($(".container-game").height());
});