(function($) {
    
    const domObserver = new MutationObserver((mutationList) => {
        const featuredImage = $('.editor-post-featured-image__preview-image');
        
        if(featuredImage.length) {
            featuredImage.attr('src', featuredImage.attr('src').replace(/-\d+x\d+\./, '.'));
        }
    });
    
    domObserver.observe(document.body, {childList: true, subtree: true});
    
    if(window.acf) {
        
		window.acf.addAction('load_field/name=cta-details', function(field) {
            function setFieldValue(field, value) {
                switch (field.data.type) {
                    case 'true_false':
                        field.$input().prop('checked', value);
                        if(value) {
                            field.$el.find('.acf-switch').addClass('-on');
                        } else {
                            field.$el.find('.acf-switch').removeClass('-on');
                        }
                    break;
                    case 'color_picker':
                        field.val(value);
                        if(value) {
                            field.$el.find('.button.wp-color-result').attr('style', 'background-color:' + value);
                        } else {
                            field.$el.find('.button.wp-picker-clear').trigger('click');
                            field.$el.find('.button.wp-color-result').attr('style', null);
                        }
                    break;
                    default:
                        field.val(value);
                }
            }
            var cta_preview = acf.getField($(field.$el.find('[data-name="preview"]')));
            var cta_options = acf.getField($(field.$el.find('[data-name="options"]')));
            cta_preview.on('change', function(e) {
                var active, text_color, bg_color_1, bg_color_2, button_exist,
                button_text_color,button_bg_color_1, button_bg_color_2,
                divider_exist, divider_bg_color_1, divider_bg_color_2;
                
                switch(cta_preview.val()) {
                    case 'style_1':
                        active = true;
                        text_color = "";
                        bg_color_1 = "";
                        bg_color_2 = "";
                        button_exist = false;
                        button_text_color = "";
                        button_bg_color_1 = "";
                        button_bg_color_2 = "";
                        divider_exist = false;
                        divider_bg_color_1 = "";
                        divider_bg_color_2 = "";
                    break;
                    case 'style_2':
                        active = true;
                        text_color = "";
                        bg_color_1 = "";
                        bg_color_2 = "";
                        button_exist = false;
                        button_text_color = "";
                        button_bg_color_1 = "";
                        button_bg_color_2 = "";
                        divider_exist = true;
                        divider_bg_color_1 = "#527eff";
                        divider_bg_color_2 = "#a067e8";
                    break;
                    case 'style_3':
                        active = true;
                        text_color = "";
                        bg_color_1 = "";
                        bg_color_2 = "";
                        button_exist = true;
                        button_text_color = "";
                        button_bg_color_1 = "#a067e8";
                        button_bg_color_2 = "#527eff";
                        divider_exist = true;
                        divider_bg_color_1 = "#527eff";
                        divider_bg_color_2 = "#a067e8";
                    break;
                    case 'style_4':
                        active = true;
                        text_color = "";
                        bg_color_1 = "#166dbd";
                        bg_color_2 = "";
                        button_exist = true;
                        button_text_color = "#000000";
                        button_bg_color_1 = "";
                        button_bg_color_2 = "";
                        divider_exist = true;
                        divider_bg_color_1 = "#6dc7ff";
                        divider_bg_color_2 = "#e6abff";
                    break;
                    case 'style_5':
                        active = true;
                        text_color = "#000000";
                        bg_color_1 = "#e6abff";
                        bg_color_2 = "#6dc7ff";
                        button_exist = true;
                        button_text_color = "";
                        button_bg_color_1 = "";
                        button_bg_color_2 = "";
                        divider_exist = true;
                        divider_bg_color_1 = "#ffffff";
                        divider_bg_color_2 = "";
                    break;
                    default:
                        active = true;
                        text_color = "";
                        bg_color_1 = "";
                        bg_color_2 = "";
                        button_exist = false;
                        button_text_color = "";
                        button_bg_color_1 = "";
                        button_bg_color_2 = "";
                        divider_exist = false;
                        divider_bg_color_1 = "";
                        divider_bg_color_2 = "";
                }
                setFieldValue(acf.getField($(cta_options.$el.find('.acf-field[data-name="active"]'))), active);
                setFieldValue(acf.getField($(cta_options.$el.find('.acf-field[data-name="text-color"]'))), text_color);
                setFieldValue(acf.getField($(cta_options.$el.find('.acf-field[data-name="bg-colors"] .acf-field[data-name="bg-color-1"]'))), bg_color_1);
                setFieldValue(acf.getField($(cta_options.$el.find('.acf-field[data-name="bg-colors"] .acf-field[data-name="bg-color-2"]'))), bg_color_2);
                setFieldValue(acf.getField($(cta_options.$el.find('.acf-field[data-name="button"] .acf-field[data-name="exist"]'))), button_exist);
                setFieldValue(acf.getField($(cta_options.$el.find('.acf-field[data-name="button"] .acf-field[data-name="text-color"]'))), button_text_color);
                setFieldValue(acf.getField($(cta_options.$el.find('.acf-field[data-name="button"] .acf-field[data-name="bg-colors"] .acf-field[data-name="bg-color-1"]'))), button_bg_color_1);
                setFieldValue(acf.getField($(cta_options.$el.find('.acf-field[data-name="button"] .acf-field[data-name="bg-colors"] .acf-field[data-name="bg-color-2"]'))), button_bg_color_2);
                setFieldValue(acf.getField($(cta_options.$el.find('.acf-field[data-name="divider"] .acf-field[data-name="exist"]'))), divider_exist);
                setFieldValue(acf.getField($(cta_options.$el.find('.acf-field[data-name="divider"] .acf-field[data-name="bg-colors"] .acf-field[data-name="bg-color-1"]'))), divider_bg_color_1);
                setFieldValue(acf.getField($(cta_options.$el.find('.acf-field[data-name="divider"] .acf-field[data-name="bg-colors"] .acf-field[data-name="bg-color-2"]'))), divider_bg_color_2);
            });
        });
		
		window.acf.addAction('render_block_preview', function($block) {
            function init_owl() {
                var owl            = $block.find('.owl-carousel'),
                    owl_item       = owl.children();
                    
                var default_options = {
                    lazyLoad: true,
                    responsiveClass:true,
                    autoplayHoverPause: true
                };
                owl.owlCarousel($.extend(default_options, owl.data('options')));
				owl.trigger('refresh.owl.carousel');
            }
            if($block.find('.owl-carousel').length) {
                if(typeof owl !== 'undefined') {
                    init_owl();
                } else {
                    $('<link rel="stylesheet" href="/wp-content/themes/friendlyway/assets/owlCarousel/owlCarousel.min.css">').prependTo('head');
                    $.getScript('/wp-content/themes/friendlyway/assets/owlCarousel/owlCarousel.min.js', function(data, textStatus, jqxhr) {
                        init_owl();
                    });
                }
            }
        });
	}
	
	$('.table-view-list').each(function(){
		$(this).wrap('<div class="wp-table-overflow"></div>');
	});
})(jQuery);