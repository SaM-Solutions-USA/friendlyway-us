(function($) {
    $('.page-content .block-faq').on('click', '.block-faq__repeater-item', function(e) {
		$(this).toggleClass('block-faq__repeater-item_active');
		$(this).children('.block-faq__repeater-descr').slideToggle();
	});
})(jQuery);