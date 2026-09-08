$(document).ready(function() {
    $('.block-introduction').find('.block-introduction__video-has-play')
        .on('click',
            $('video:not([autoplay]):not([controls])'), function(e) {
                const wrapVideo = $(this), tagVideo  = wrapVideo.find('video');
                
                if(tagVideo[0].paused) {
                    wrapVideo.removeClass('block-introduction__video-is-paused')
                    .addClass('block-introduction__video-is-played');
                    
                    tagVideo[0].play();
                } else {
                    wrapVideo.removeClass('block-introduction__video-is-played')
                    .addClass('block-introduction__video-is-paused');
                    
                    tagVideo[0].pause();
                }
            }
        );
});