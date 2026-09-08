(function($) {
    
    $('.block-cases_style_1').each(function() {
        const $block = $(this),
        
              $terms      = $block.find('.block-cases__terms'),
              $termsChild = $terms.children('.block-cases__term'),
              
              $items      = $block.find('.block-cases__items'),
              $itemsChild = $items.children('.block-cases__item');
        
        /* ======================================================================================================= */
        
        $terms.on('click', '.block-cases__term:not(.block-cases__term_active)', function(event) {
            const $term    = $(this),
                  termName = $term.text();
                  
            /* =================================================================================================== */

            $termsChild.not($term).removeClass('block-cases__term_active');
            $term.addClass('block-cases__term_active');
            
            /* =================================================================================================== */

            $itemsChild.map(function(index, item) {
                if($.inArray(termName, $(item).data('terms').split(',')) !== -1) {
                    $(item).addClass('block-cases__item_active');
                } else {
                    $(item).removeClass('block-cases__item_active');
                }
            });
            
        });
    });
    
})(jQuery);