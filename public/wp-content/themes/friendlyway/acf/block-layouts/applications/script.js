$(document).ready(function() {
	$('.block-applications__item-head').click(function(event) {
		var $this = $(this),

			current_body = $this.next(),
			current_item = $this.parent(),
			parent_items = current_item.parent(),
			others_items = parent_items.children().not(current_item);
		
		if($(window).width() > 575) {
			others_items.removeClass('block-applications__item_active').removeAttr('style');
		}

		current_item.toggleClass('block-applications__item_active');

		if(parent_items.children('.block-applications__item_active').length) {
			parent_items.addClass('block-applications__grid_active');
		} else {
			parent_items.removeClass('block-applications__grid_active');
		}

		if(!current_item.hasClass('block-applications__item_active')) {
			current_item.removeAttr('style');
		} else {
			current_item.css('margin-bottom', current_body.innerHeight() + 6)
				.css('margin-bottom', current_body.innerHeight() + 6);
		}

	});

	$(window).resize(function() {
		$('.block-applications__item').each(function() {
			if($(this).hasClass('block-applications__item_active')) {
				$(this).css('margin-bottom', $(this).children('.block-applications__item-body').innerHeight() + 6);
			}
		});
		
		if($(window).width() > 575) {
			$('.block-applications__item_active:not(:eq(0))').removeClass('block-applications__item_active').attr('style', null);;
		}
	});
});	