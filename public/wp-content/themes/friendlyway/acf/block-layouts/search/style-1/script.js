$(document).ready(function() {
    
    $('.block-search_style_1 .block-search__form').on('keyup', '.block-search__form-input', function(e) {
        const form  = $(e.delegateTarget),
        
              formInput = $(e.currentTarget), currentValue = formInput.val(),
              formClear = form.find('.block-search__form-clear');

	    currentValue ? formClear.show() : formClear.hide();
	});
	
	$('.block-search_style_1 .block-search__form').on('click', '.block-search__form-clear', function(e) {
	    const form = $(e.delegateTarget),
	    
	          formInput = form.find('.block-search__form-input');
              formClear = form.find('.block-search__form-clear');
	    
	    formClear.hide(); formInput.attr('value', null);
	});
    
});