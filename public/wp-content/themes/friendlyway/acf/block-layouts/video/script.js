$(document).ready(function() {
    
	$('.block-video__file-wrap').on('click', function(event) {
	    const $this = $(this);
	    
		if($this.hasClass('block-video__file-is-played')) {
		    $this.find('video')[0].pause();
		    
		    $this.removeClass('block-video__file-is-played')
		         .addClass('block-video__file-is-paused');
		} else {
		    $this.find('video')[0].play();
		    
		    $this.removeClass('block-video__file-is-paused')
		         .addClass('block-video__file-is-played');
		}
	});
	
});	