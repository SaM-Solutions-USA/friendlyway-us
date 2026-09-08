$(document).ready(function() {
	$('.block-objects-tabs').on('click', '.block-objects-tabs__name', function(event) {
	    const currentTab    = $(this),
	          currentBlock  = $(event.delegateTarget);
	          
	    const blockTabs  = currentBlock.find('.block-objects-tabs__name'),
	          blockGrids = currentBlock.find('.block-objects-tabs__grid');
	    
	    blockTabs.removeClass('block-objects-tabs__name_active');
	    currentTab.addClass('block-objects-tabs__name_active');
	    
		blockGrids.removeClass('block-objects-tabs__grid_active');
		blockGrids.eq(currentTab.index()).addClass('block-objects-tabs__grid_active');
	});
});	