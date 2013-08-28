jQuery(document).ready(function($) {

	// to make our grid pretty
	$('.posts').masonry({
 	// columnWidth: 960,
 	itemSelector: '.post'
	});

	// for the gallery
	$("#slides").slidesjs({
		navigation : {
			effect : "fade"
		}

	});

});





















