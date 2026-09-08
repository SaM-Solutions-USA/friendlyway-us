$(document).ready(function() {
    const header   = $('.header'),
          adminBar = $('#wpadminbar');
    
	$('.block-plans-comparison__item').on('click', '.block-plans-comparison__item-head', function(event) {
	    let adminBarHeight = 0;
	    
	    if(adminBar.length && $(window).outerWidth() > 600) {
            adminBarHeight = adminBar.outerHeight();
        }
	    
		$(event.delegateTarget).toggleClass('block-plans-comparison__item_active');
		        
		if($(event.delegateTarget).hasClass('block-plans-comparison__item_active')) {
    		$('html, body').animate({
                scrollTop: $(event.delegateTarget).offset().top - header.outerHeight() - adminBarHeight - 15
            }, 250);
		}
	});
});	