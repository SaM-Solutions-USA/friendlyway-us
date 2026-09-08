$(document).ready(function() {
    
    $('.block-solutions').each(function() {
        const $block = $(this),
        
              $grid = $block.find('.block-solutions__grid'),
        
              $tabs      = $block.find('.block-solutions__tabs'),
              $tabsChild = $tabs.children('.block-solutions__tab');
              
        $tabsChild.click(function(event) {
            const $tab     = $(this),
                  tabIndex = $tab.index();
            
            if(!$tab.hasClass('block-solutions__tab_active')) {
                $tab.addClass('block-solutions__tab_active');

                $grid.filter(function(index) {  
                    return index !== tabIndex;
                }).addClass('block-solutions__grid_inactive');
                
                $tabsChild.not($tab).removeClass('block-solutions__tab_active');
                $grid.eq(tabIndex).removeClass('block-solutions__grid_inactive');
            }
        });
        
        $tabsChild.eq(0).trigger('click');
    });
    
});	