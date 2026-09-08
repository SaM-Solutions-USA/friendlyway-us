$(document).ready(function() {
	$('.block-accordion__item').on('click', function(event) {
	    $(this).toggleClass('block-accordion__item_active');
	});
});