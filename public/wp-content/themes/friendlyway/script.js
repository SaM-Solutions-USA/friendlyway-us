/*
 Sticky-kit v1.1.2 | WTFPL | Leaf Corcoran 2015 | http://leafo.net
*/
(function(){var b,f;b=this.jQuery||window.jQuery;f=b(window);b.fn.stick_in_parent=function(d){var A,w,J,n,B,K,p,q,k,E,t;null==d&&(d={});t=d.sticky_class;B=d.inner_scrolling;E=d.recalc_every;k=d.parent;q=d.offset_top;p=d.spacer;w=d.bottoming;null==q&&(q=0);null==k&&(k=void 0);null==B&&(B=!0);null==t&&(t="is_stuck");A=b(document);null==w&&(w=!0);J=function(a,d,n,C,F,u,r,G){var v,H,m,D,I,c,g,x,y,z,h,l;if(!a.data("sticky_kit")){a.data("sticky_kit",!0);I=A.height();g=a.parent();null!=k&&(g=g.closest(k));
if(!g.length)throw"failed to find stick parent";v=m=!1;(h=null!=p?p&&a.closest(p):b("<div />"))&&h.css("position",a.css("position"));x=function(){var c,f,e;if(!G&&(I=A.height(),c=parseInt(g.css("border-top-width"),10),f=parseInt(g.css("padding-top"),10),d=parseInt(g.css("padding-bottom"),10),n=g.offset().top+c+f,C=g.height(),m&&(v=m=!1,null==p&&(a.insertAfter(h),h.detach()),a.css({position:"",top:"",width:"",bottom:""}).removeClass(t),e=!0),F=a.offset().top-(parseInt(a.css("margin-top"),10)||0)-q,
u=a.outerHeight(!0),r=a.css("float"),h&&h.css({width:a.outerWidth(!0),height:u,display:a.css("display"),"vertical-align":a.css("vertical-align"),"float":r}),e))return l()};x();if(u!==C)return D=void 0,c=q,z=E,l=function(){var b,l,e,k;if(!G&&(e=!1,null!=z&&(--z,0>=z&&(z=E,x(),e=!0)),e||A.height()===I||x(),e=f.scrollTop(),null!=D&&(l=e-D),D=e,m?(w&&(k=e+u+c>C+n,v&&!k&&(v=!1,a.css({position:"fixed",bottom:"",top:c}).trigger("sticky_kit:unbottom"))),e<F&&(m=!1,c=q,null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),
h.detach()),b={position:"",width:"",top:""},a.css(b).removeClass(t).trigger("sticky_kit:unstick")),B&&(b=f.height(),u+q>b&&!v&&(c-=l,c=Math.max(b-u,c),c=Math.min(q,c),m&&a.css({top:c+"px"})))):e>F&&(m=!0,b={position:"fixed",top:c},b.width="border-box"===a.css("box-sizing")?a.outerWidth()+"px":a.width()+"px",a.css(b).addClass(t),null==p&&(a.after(h),"left"!==r&&"right"!==r||h.append(a)),a.trigger("sticky_kit:stick")),m&&w&&(null==k&&(k=e+u+c>C+n),!v&&k)))return v=!0,"static"===g.css("position")&&g.css({position:"relative"}),
a.css({position:"absolute",bottom:d,top:"auto"}).trigger("sticky_kit:bottom")},y=function(){x();return l()},H=function(){G=!0;f.off("touchmove",l);f.off("scroll",l);f.off("resize",y);b(document.body).off("sticky_kit:recalc",y);a.off("sticky_kit:detach",H);a.removeData("sticky_kit");a.css({position:"",bottom:"",top:"",width:""});g.position("position","");if(m)return null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),h.remove()),a.removeClass(t)},f.on("touchmove",l),f.on("scroll",l),f.on("resize",
y),b(document.body).on("sticky_kit:recalc",y),a.on("sticky_kit:detach",H),setTimeout(l,0)}};n=0;for(K=this.length;n<K;n++)d=this[n],J(b(d));return this}}).call(this);

/*
--------------------------------------------------------------------------------------------------------------------*/

$(document).ready(function() {
    const date = new Date();

    const $body = $('body');
    const $window = $(window);
    const $header = $('.header');
    const $adminBar = $('#wpadminbar');
    
    const url = new URL(window.location);
    
    const $welcomeBanner = $('#welcome-banner');
    const $headerRowFirst = $('.header__container-fluid').eq(0);
    
    let headerHeight1 = parseInt($header.css('--header-height-1'));
	let headerHeight2 = parseInt($header.css('--header-height-2'));
	
	/*
    ----------------------------------------------------------------------------------------------------------------*/
    
    function getHeaderHeight() {
        return ($header.length) ? $header.outerHeight() : 0;
    }
    
	function getAdminBarHeight() {
	    return ($adminBar.length) ? $adminBar.outerHeight() : 0;
	}
    
    function getWelcomeBannerHeight() {
	    return ($welcomeBanner.length) ? $welcomeBanner.outerHeight() : 0;
	}
	
	function getScrollbarWidth() {
    	return window.innerWidth - document.documentElement.clientWidth;
    }
    
    function getHeaderRowFirstHeight() {
	    return ($headerRowFirst.length) ? $headerRowFirst.outerHeight() : 0;
	}
    
    function getScrollPaddingTop() {
	    return getAdminBarHeight() + getWelcomeBannerHeight() + getHeaderHeight();
    }
    
    /*
    ----------------------------------------------------------------------------------------------------------------*/
    
    let headerHeight = getHeaderHeight();
    
    /*
    ----------------------------------------------------------------------------------------------------------------*/
    
    let adminBarHeight = getAdminBarHeight();
    
    /*
    ----------------------------------------------------------------------------------------------------------------*/
	
	function initWelcomeBanner() {
        if($welcomeBanner.length) {
            let welcomeBannerData = JSON.parse(localStorage.getItem('welcome-banner'));
            
            if(welcomeBannerData === null || $welcomeBanner.data('release') != welcomeBannerData.date.release) {

                function updateTimer() {
                    let startDate    = new Date().getTime(),
                          endDate    = new Date("2025-10-23T22:00:00+02:00").getTime(),
                          expiryDate = Math.abs(endDate - startDate);
    
                    if(expiryDate > 0) {
                        let days = Math.floor(expiryDate / (1000 * 60 * 60 * 24));
                        expiryDate %= 24 * 60 * 60 * 1000;
                        
                        let hours = Math.floor(expiryDate / (60 * 60 * 1000));
                        expiryDate %= 60 * 60 * 1000;
                        
                        let minutes = Math.floor(expiryDate / (60 * 1000));
                        expiryDate %= 60 * 1000;
                        
                        let seconds = Math.floor(expiryDate / 1000);
                        expiryDate %= 1000;
                        
                        $welcomeBanner.find('.welcome-banner__timer-time_days').text(days.toString().padStart(2, '0'));
                        $welcomeBanner.find('.welcome-banner__timer-time_hours').text(hours.toString().padStart(2, '0'));
                        $welcomeBanner.find('.welcome-banner__timer-time_minutes').text(minutes.toString().padStart(2, '0'));
                        $welcomeBanner.find('.welcome-banner__timer-time_seconds').text(seconds.toString().padStart(2, '0'));
                    } else {
                        $welcomeBanner.find('.welcome-banner__timer').remove();
                    }
                }
                
                if(welcomeBannerData !== null && $welcomeBanner.data('release') != welcomeBannerData.date.release) {
                    localStorage.removeItem('welcome-banner');
                }

                /*if($welcomeBanner.find('.welcome-banner__timer').length) {
                    setInterval(updateTimer, 1000);
                    updateTimer();    
                }*/
                
                $welcomeBanner.addClass('welcome-banner_active');
            } else {
                $welcomeBanner.remove();
            }
        } else {
            localStorage.removeItem('welcome-banner');
        }
    }
    
    /*
    ----------------------------------------------------------------------------------------------------------------*/
    
    let isActiveHeaderSticky = false;
    let headerOffsetTopStart = $header.offset().top;

    function toggleHeaderSticky(e) {
        const headerHeight = getHeaderHeight();
        const windowScrollTop  = $window.scrollTop();
        const heightHeaderRow1 = getHeaderRowFirstHeight();
        const welcomeBannerHeight = getWelcomeBannerHeight();
        
        const shouldBeSticky = windowScrollTop > welcomeBannerHeight + heightHeaderRow1;
        
        if(shouldBeSticky) {
            if(!isActiveHeaderSticky) {
                $welcomeBanner.css('visibility', 'hidden');
                $body.css('padding-top', headerHeight);
                $header.addClass('header_sticky');
                isActiveHeaderSticky = true;
            }

            if(e && e.type === 'scroll') {
                const headerOffsetTopCurrent = $header.offset().top;
                const isScrollingUp = headerOffsetTopStart >= headerOffsetTopCurrent;
                
                if(isScrollingUp) {
                    $header.removeClass('header_down').addClass('header_up');
                } else {
                    $header.removeClass('header_up').addClass('header_down');
                }

                headerOffsetTopStart = headerOffsetTopCurrent;
            }
        } else if(windowScrollTop == 0) {
            $body.css('padding-top', 0);
            $welcomeBanner.css('visibility', 'visible');
            $header.removeClass('header_sticky header_up header_down');
            
            headerOffsetTopStart = $header.offset().top; isActiveHeaderSticky = false;
        }
    }
    
    $window.on('scroll resize', function(e) {
        toggleHeaderSticky(e);
    });

    toggleHeaderSticky();
    
    /*
    ----------------------------------------------------------------------------------------------------------------*/
	
	let visitData = (sessionStorage.getItem('visit-data')) ? JSON.parse(sessionStorage.getItem('visit-data')) : {};
	
	visitData.firstPage = (visitData.firstPage) ? visitData.firstPage : window.location.href;
	visitData.timeStamp = Math.floor(Date.now() / 1000);
	visitData.pageViews = (visitData.pageViews) ? ++visitData.pageViews : 2;
	
	sessionStorage.setItem('visit-data', JSON.stringify(visitData));
	
	/*
    ----------------------------------------------------------------------------------------------------------------*/
	
	$('body:not(.logged-in)').on('contextmenu', function(event) {
	    if($(event.target)[0].localName == 'video'
	    || $(event.target)[0].localName == 'img') {
	        event.preventDefault();
	    }
    });
    
    /*
    ----------------------------------------------------------------------------------------------------------------*/
	
	initWelcomeBanner();
    
    /*
    ----------------------------------------------------------------------------------------------------------------*/
	
	function update_header_menu_main() {
		$('.header__menu_main .header__menu-item_parent').each(function() {
			if($window.outerWidth() >= 992) {
				$(this).find('.header__menu-next,.header__menu-prev').remove();
			} else {
				if($(this).children('.header__menu-next').length == 0) {
					$(this).children('.header__menu-dropdown').before('<span class="header__menu-next">'+
					  									  	            '<span class="header__menu-icon"></span>'+
					  								                  '</span>');

					$('<span class="header__menu-prev">'+
					  	'<span class="header__menu-icon"></span>'+
					    '<span class="header__menu-name">' +  $(this).children('.header__menu-link').text() + '</span>'+
					  '</span>').prependTo($(this).children('.header__menu-dropdown'));	
				}
			}
		})
	}
	
	/*
    ----------------------------------------------------------------------------------------------------------------*/
	
	$('.sideback').on('click',function() {
		$('.header__menu_main .header__menu-bars').click();
	});
	
	/*
    ----------------------------------------------------------------------------------------------------------------*/
	
	$welcomeBanner.on('click', '.welcome-banner__close', function(e) {
	    e.preventDefault();
	    
	    localStorage.setItem('welcome-banner', JSON.stringify({
	        'date' : {
	            'release' : $(e.delegateTarget).data('release'),
	            'closure' : Math.floor(new Date().getTime() / 1000)
	        }
	    }));
	    
		$(e.delegateTarget).remove();
	});
	
	/*
    ----------------------------------------------------------------------------------------------------------------*/
	
	$('.header__menu_main').on('click','.header__menu-bars',function() {
		$body.toggleClass('compensate-for-scrollbar');
		$('.sideback').toggleClass('sideback_active');
		
	    $(this).toggleClass('header__menu-bars_active');
		$(this).parent().find('.header__menu-list').toggleClass('header__menu-list_responsive');
	});
	
	$('.header__menu_main .header__menu-item_parent').on('click','.header__menu-link',function(e) {
		if($(this).next('.header__menu-next').length) {
			e.preventDefault();
			$(this).next('.header__menu-next').click();
		}
	});
	
	$('.header__menu_main .header__menu-item_parent').on('click','.header__menu-next',function() {
		$('.header__menu_main .header__menu-list').find('.header__menu-dropdown').removeClass('header__menu-dropdown_active');
		$(this).next('.header__menu-dropdown').addClass('header__menu-dropdown_slide header__menu-dropdown_active');
		$(this).offsetParent().scrollTop(0);
	});
	
	$('.header__menu_main .header__menu-item_parent').on('click','.header__menu-prev',function() {
		$(this).parent('.header__menu-dropdown').removeClass('header__menu-dropdown_slide header__menu-dropdown_active');
		if($(this).parent('.header__menu-dropdown').offsetParent().hasClass('header__menu-dropdown')) {
			$(this).parent('.header__menu-dropdown').offsetParent('.header__menu-dropdown').addClass('header__menu-dropdown_active');
		}
	});
	
	$window.resize(function() {
		update_header_menu_main();
		if($body.outerWidth() >= 992) {
			if($('.header__menu_main .header__menu-list').hasClass('header__menu-list_responsive')) {
				$('.header__menu_main .header__menu-bars').click();	
			}
		}
	});
	
	update_header_menu_main();
	
	/*
    ----------------------------------------------------------------------------------------------------------------*/
	
	$('.menu-item-cookie').click(function() {
		Cookiebot.show();
	});
	
	/*
    ----------------------------------------------------------------------------------------------------------------*/
	
	$('.block-sitemap__tabs').on('click', '.block-sitemap__tab', function(e) {
		$(e.delegateTarget).children('.block-sitemap__tab').removeClass('block-sitemap__tab_active');
		$(e.currentTarget).addClass('block-sitemap__tab_active');

		$(e.delegateTarget).next('.block-sitemap__lists').children('.block-sitemap__list').removeClass('block-sitemap__list_active');
		$(e.delegateTarget).next('.block-sitemap__lists').children('.block-sitemap__list').eq($(e.currentTarget).index()).addClass('block-sitemap__list_active');
	});
	
	$('.block-sitemap__tab').eq(0).click();
	
	/*
    ----------------------------------------------------------------------------------------------------------------*/
	
	if($('iframe#configuratorIframe').length) {
	    setTimeout(function() {
			$.getScript('https://configurator.canvaslogic.de/integration.js');
		}, 1000);
	}
	
	if($('iframe[data-src^="https://storage.googleapis.com"]').length) {
		setTimeout(function() {
			$.getScript('https://storage.googleapis.com/clp-basic-configurator/integration.js')
		}, 1000);
	}
	
	$('iframe[data-src^="https://friendlyway.canvaslogic.de"]').each(function() {
		var iframe = $(this);
		setTimeout(function() {
			$.getScript('https://friendlyway.canvaslogic.de/' + iframe.attr('id') + '/integration.js')
		}, 1000);
	});
	
	/*
    ----------------------------------------------------------------------------------------------------------------*/
	
	if($('[data-fancybox]').length) {
		$('<link rel="stylesheet" href="' + window.wp_data.template_uri + '/assets/fancyBox/fancyBox.min.css">').prependTo('head');
		$.getScript(window.wp_data.template_uri + '/assets/fancyBox/fancyBox.min.js', function(data, textStatus, jqxhr) {
			$().fancybox();
		});
	}
	
	/*
    ----------------------------------------------------------------------------------------------------------------*/
	
	if($('.owl-carousel').length) {
		$('<link rel="stylesheet" href="' + window.wp_data.template_uri + '/assets/owlCarousel/owlCarousel.min.css">').prependTo('head');
		$.getScript(window.wp_data.template_uri + '/assets/owlCarousel/owlCarousel.min.js', function(data, textStatus, jqxhr) {
			function initCarousel(owl) {
			    if(owl.data('options')) {
				    const defaultOptions = {
					    lazyLoad: true,
						responsiveClass:true
					};
					
				    if(owl.data('options').autoplay == true
				    && owl.data('options').hasOwnProperty('autoplay')) {
				        owl.data('options')['autoplayHoverPause'] = true;
				    }
				    
				    if(owl.data('owl-destroy')) {
				        if($window.width() <= owl.data('owl-destroy')) {
				            if(typeof owl.data('owl.carousel') != 'undefined') {
                              owl.data('owl.carousel').destroy();
                            }
                            
                            owl.removeClass('owl-carousel');
				        } else {
				            owl.addClass('owl-carousel');
				            
				            owl.owlCarousel($.extend(defaultOptions, owl.data('options')));
				        }
				    } else {
				        owl.owlCarousel($.extend(defaultOptions, owl.data('options')));
				    }
				}
			}
			
			$('.owl-carousel').each(function() {
				initCarousel($(this));
			});
			
			$window.resize(function() {
			    $('[data-owl-destroy]').each(function() {
    			    initCarousel($(this));
			    });
			});

			var block_clients = $('.block-clients__owl-carousel');
			
			if(block_clients.length) {
				block_clients.each(function(){
					$(this).owlCarousel({
					    items: 9,
						nav: false,
						loop: true,
						margin: 40,
						dots: false,
						lazyLoad: true,
						autoplay: true,
						autoWidth: true,
                        autoplaySpeed: 5000,
    					autoplayTimeout: 5000,
    					autoplayHoverPause: false,
    					slideTransition: 'linear'
					})
				});
			}

			var overview_slider = $('.block-overview-slider__owl-carousel');
			
			if(overview_slider.length) {
				overview_slider.each(function() {
					var init_progress = (overview_slider.find('.block-overview-slider__repeater-item').length > 1) ? true : false;
					
					$(this).owlCarousel({
						items: 1,
						nav: false,
						margin: 0,
						loop: true,
						dots: true,
						autoplay:true,
						lazyLoad: true,
						autoHeight: false,
						animateOut: 'fadeOut',
						autoplayTimeout: 5050,
						autoplayHoverPause: true,
						responsiveClass:true,
						responsive:{
							768:{
								nav: true
							},
							992:{
								autoHeight: false
							}
						},
						onInitialized:function(event) {
							if(init_progress) {
								$(event.target).next('.block-overview-slider__progress')
									.addClass('block-overview-slider__progress_init');
							}
						},
						onChange:function(event) {
							if(init_progress) {
								$(event.target).next('.block-overview-slider__progress')
									.removeClass('block-overview-slider__progress_init');
							}
						},
						onTranslate:function(event) {
							if(init_progress) {
								$(event.target).next('.block-overview-slider__progress')
									.addClass('block-overview-slider__progress_init');
							}
						}
					});
				});
			}
			
			$('.block-tab-slider__owl-carousel').each(function() {
			    const tab_slider = $(this);
			    
    			function init_tab_slider() {
    			    var observerTabSlider = new IntersectionObserver(function(entries) {
                      if(entries[0].isIntersecting) {
                        $(entries[0].target).addClass('is-intersecting');
                      } else {
                        $(entries[0].target).removeClass('is-intersecting');
                      }
                    }, { threshold: [0] });
                    
                    observerTabSlider.observe(tab_slider[0]);
    			    
    			    if(tab_slider.parent().find('.block-tab-slider__dots').length == 0) {
						 $('<div class="block-tab-slider__dots"></div>').appendTo(tab_slider.parent());
					}
    			    
    				var tab_slider_dots = tab_slider.next();
    				
    				if($body.outerWidth() + getScrollbarWidth() >= 992) {
    					tab_slider.addClass('owl-carousel');
    					var tab_slider_args = {
    						items:1,
    						margin:10,
    						nav:false,
    						dots:true,
    						loop:true,
    						lazyLoad:true,
    						smartSpeed:0,
    						dotsData:true,
    						autoplay:true,
    						touchDrag:false,
    						mouseDrag:false,
    						autoplayTimeout:5000,
    						autoplayHoverPause:false,
    						dotsContainer: tab_slider_dots,
    						dotClass: 'block-tab-slider__dots-item'
    					};
    					
    					tab_slider_dots.on('click','.block-tab-slider__dots-btn',function(e) {
    						tab_slider.data('owl.carousel').to($(this).parent().index());
    						$(this).parent().parent().children('.active').removeClass('active');
    						tab_slider.trigger('stop.owl.autoplay');
    						$(e.delegateTarget).addClass('stop');
    						$(this).parent().addClass('active');
    					});
    					
    					tab_slider.children().each(function() {
    						if($(this).children('.block-tab-slider__dots-btn,.block-tab-slider__dots-descr').length) {
    							$(this).children('.block-tab-slider__dots-btn,.block-tab-slider__dots-descr').remove();
    						}
    					});
    					
    					if(tab_slider.next().hasClass('stop')) {
    						tab_slider.next().removeClass('stop');
    					}
    					
    					tab_slider.owlCarousel(tab_slider_args).trigger('refresh.owl.carousel');
    				} else {
    					tab_slider.children().each(function() {
    						if($(this).children('.block-tab-slider__dots-btn').length == 0) {
    							$($(this).data('dot')).prependTo($(this));
    						}
    					});
    					
    					if(tab_slider.parent().find('.block-tab-slider__dots').length) {
						    tab_slider.parent().find('.block-tab-slider__dots').remove();
					    }
    					
    					tab_slider.trigger('destroy.owl.carousel').removeClass('owl-carousel');
    				}
    			}
    			
    			var tab_slider_counter = 0,
    			    tab_slider_init = true;
    			    
    			function update_tab_slider() {
    				var tab_slider_item = tab_slider.children();
    				
    				if(tab_slider_init || tab_slider.hasClass('is-intersecting')) {
    				    tab_slider_init = false;
        				tab_slider_counter++;
        				
        				if(tab_slider_counter > tab_slider_item.length) {
        					tab_slider_counter = 1;
        				}
        				
        				tab_slider_item.removeClass('active');	
        				tab_slider_item.eq(tab_slider_counter - 1).addClass('active');
    				}
    				
    				setTimeout(update_tab_slider, 5000);
    			}
    			
    			tab_slider.on('click','.block-tab-slider__dots-btn',function(e) {
    				$(e.delegateTarget).children('.active').removeClass('active');
    				$(this).parent().addClass('active');
    				$('html, body').animate({
    					scrollTop: $(this).parent().offset().top - $header.outerHeight() - getAdminBarHeight()
    				}, 500);
    				tab_slider_counter = $(this).parent().index();
    			});
    			
    			update_tab_slider();
    
    			$window.on('resize',function() {
    				init_tab_slider();
    			});
    			
    		    init_tab_slider();
			});
			
			$('.owl-carousel').each(function() {
				$(this).trigger('refresh.owl.carousel');
			});
			
		});
	}
	
	/*
    ----------------------------------------------------------------------------------------------------------------*/
	
	if(url.hash) {
		if(url.hash.includes("?")) {
			window.location.replace(window.location.href.replace(url.hash, '?' + url.hash.split('?')[1] + url.hash.split('?')[0]));
		} else {
			if($(url.hash).length) {
				setTimeout(function(){
					$('html, body').animate({
						scrollTop: $(url.hash).offset().top - getScrollPaddingTop()
					}, 500);
				}, 250);
			}
		}
	}
	
	/*
    ----------------------------------------------------------------------------------------------------------------*/
	
	$body.find('a').each(function() {
		let link     = $(this),
		    linkHREF = link.attr("href"),
			linkHASH = link.get(0).hash;
		
		if(linkHASH && linkHASH.includes("?")) {
			link.attr("href", linkHREF.replace(linkHASH, '?' + linkHASH.split('?')[1] + linkHASH.split('?')[0]));
		}
	});
	
	/*
    ----------------------------------------------------------------------------------------------------------------*/
    
	var ticker = $('.ticker'),
	    ticker_version = Date.parse(window.wp_data.ticker_version);
	
	function init_ticker() {
		var localStorage_ticker = localStorage.getItem('ticker?ver=' + ticker_version);
		
		if(localStorage_ticker === null) {
			var window_scrollTop = $window.scrollTop();
			
			if(window_scrollTop > 100) {
				var body_outerHeight = $body.outerHeight(),
					window_outerHeight = $window.outerHeight(),
					ticker_outerHeight = ticker.outerHeight();
				
				if(window_scrollTop + window_outerHeight > body_outerHeight - ticker_outerHeight) {
					ticker.hide();
				} else {
					ticker.show();
				}
			} else {
				ticker.hide();
			}
		} else {
			if(date >= localStorage_ticker) {
				localStorage.removeItem('ticker?ver=' + ticker_version);
			}
		}
	}
	
	$window.scroll(function() {
		init_ticker()
	});
	
	init_ticker();
	
	$('.ticker__button').click(function() {
		localStorage.setItem('ticker?ver=' + ticker_version, date.setDate(date.getDate() + 2));
		ticker.remove();
	});
	
	var ticker_time,
		ticker_index = 0;

	function update_ticker() {
		var ticker = $('.ticker__slider'),
			ticker_item = ticker.children();

		ticker_item.hide();
		
		ticker_index++;
		
		if(ticker_index > ticker_item.length) {
			ticker_index = 1;
		}    
		ticker_item.eq(ticker_index - 1).show().fadeIn();
		ticker_time = setTimeout(update_ticker, 5000);
	}
	
	update_ticker();
	
	$('.ticker__slider').hover(function() {
		clearTimeout(ticker_time);
	}, function() {
		ticker_index--;
		update_ticker();
	});
	
	/*
    ----------------------------------------------------------------------------------------------------------------*/
	
	$('.block-scenarios__item').on('click', '.block-scenarios__item-title', function(event) {
		if($body.outerWidth() <= 767) {
			$(event.delegateTarget).toggleClass('block-scenarios__item_active');
		}
	});
    
    /*
    ----------------------------------------------------------------------------------------------------------------*/
    
    function init_hbspt(hbspt_handler) {
		hbspt_handler.each(function() {
			const hbspt_form = $(this);

			hbspt.forms.create({
				region: hbspt_form.data('region'),
				formId: hbspt_form.data('formid'),
				portalId: hbspt_form.data('portalid'),
				onFormReady: function($form) {
				    let click_exist = false;

				    let isFormFilled = false;
				    let isFormSelected = false;

					$form.on('click', function() {
					    if(!isFormSelected) {
					        isFormSelected = true;
					       // dataLayer.push({
            //                     'event' : 'select_contact_form',
            //                     'form_service' : 'hubspot'
            //                 });
					    }
					});

					$form.on('change', function() {
					    let countFormErrors = 0;
					    
					    $(this).find('input[required], .inputs-list[required] input[type="checkbox"], textarea[required]').each(function() {
					        let currentFormField = $(this);
					        
					        if(currentFormField.attr('type') !== 'checkbox') {
					            if(currentFormField.val().length == 0 || currentFormField.hasClass('invalid error')) countFormErrors++;
					        } else {
					            if(currentFormField[0].checked === false) countFormErrors++;
					        }
					    });
					    
					    if(!isFormFilled && countFormErrors == 0) {
					        isFormFilled = true;
                            // dataLayer.push({
                            //     'event' : 'filled_contact_form',
                            //     'form_service' : 'hubspot'  
                            // });
					    }
					});
				    
					let ga4_loaded = function() {
						return (typeof window.google_tag_manager !== 'undefined'
							 && window.google_tag_manager.hasOwnProperty('G-008NF89VPP')) ? true : false;
					}
					
					let clarity_loaded = function() {
						return (typeof window.clarity !== 'undefined') ? true : false;
					}
					
					$($form).on('click', 'input[id^="LEGAL_CONSENT"].hs-input', function() {
						if(click_exist) {
							return;
						}
						
						if(!ga4_loaded()) {
							dataLayer.push({
								event: 'ga4_loaded'
							});
						}
						
						if(!clarity_loaded()) {
							dataLayer.push({
								event: 'clarity_loaded'
							});
						}
						
						click_exist = true;
					});

					hbspt_form.addClass('hbspt-handler_loaded');
					
					if(hbspt_form.data('formstyle')) {
					    $form.addClass('hs-form_style_' + hbspt_form.data('formstyle'));
					}
					
					setTimeout(function() {
    					hbspt_form.children('iframe').css({'visibility':'visible'});
    				}, 250);
    				
    				$form.append('<link rel="stylesheet" href="' + window.wp_data.template_uri + '/assets/HubSpot/style.css?ts1765539177">');
				},
				onBeforeFormSubmit: function($form, submissionValues) {
				    let sessionVisitData = sessionStorage.getItem('visit-data');
				    let objectVisitData  = JSON.parse(sessionVisitData);
				    let stringVisitData  = "";
				    
				    for(let property in objectVisitData) {
                	    if(stringVisitData.length > 0) {stringVisitData += "\n"}
                	    stringVisitData += property + " - " + objectVisitData[property];
                    }
				    
				    if(hbspt_form.data('formhidden')) {
					   $.each(hbspt_form.data('formhidden'), function(key, value) {
                            $form.find('.hs-form-field.' + key).find('.hs-input').attr('value', value);
                        }); 
					}
					
					$form.find('input.hs-input[name="all_visited_pages"]').attr('value', stringVisitData);
				},
				onFormSubmitted: function($form, data) {
    			 //   dataLayer.push({
        //                 'event' : 'send_contact_form',
        //                 'form_service' : 'hubspot',
        //                 'user_data' : {
        //                     'email': data.submissionValues.email || '',
        //                     'phone_number': data.submissionValues.phone || '',
        //                     'first_name': data.submissionValues.firstname || '',
        //                     'last_name': data.submissionValues.lastname || ''
        //                 }  
        //             });
    			},
				target: '#' + hbspt_form.attr('id')
			});
		});
	}
	
	/*
    ----------------------------------------------------------------------------------------------------------------*/
    
    let content_loaded = false,
	    content_timer  = setTimeout(preload_content, 500);
	    
	function preload_content(e) {
		if(content_loaded) {
			return;
		}

		const hbspt_handler = $body.find('.hbspt-handler');

		if(hbspt_handler.length) {
			$.getScript('//js.hsforms.net/forms/embed/v2.js', function() {
				init_hbspt(hbspt_handler);
			});
		}
		
		$.getScript('//js.hs-scripts.com/50845293.js');

		content_loaded = true;
		clearTimeout(content_timer);
		$body.off('click mouseover touchstart', preload_content);
	}
	
	if(localStorage.getItem('preload-content')) {
		preload_content();
	} else {
		localStorage.setItem('preload-content', 1);

	    $body.on('click mouseover touchstart', preload_content);
	}
    
    /*
    ----------------------------------------------------------------------------------------------------------------*/
    
    $body.on('click', function(e) {
	    if($window.outerWidth() >= 992
	    && $header.hasClass('header_search_active')

	    && e.target !== $('.header-search__form')[0]
	    && e.target !== $('.header-search__form-input')[0]
	    && e.target !== $('.header-search__form-clear')[0]
	    
	    && e.target !== $('.header__menu_meta .menu-item_search')[0]) {
    	    $('.header__menu_meta .menu-item_search').trigger('click');
	    }
    });
	
	$window.on('resize', function() {
	    if($window.outerWidth() < 992 && $header.hasClass('header_search_active')) {
	        $('.header__menu_meta .menu-item_search').trigger('click');
	    }
	});
	
	$header.on('click', '.header__menu_meta .menu-item_search', function(e) {
        const formInput = $(e.delegateTarget).find('.header-search__form-input'),
              formInputVal = formInput.val(), formInputValLength = formInputVal.length;

	    $(e.delegateTarget).toggleClass('header_search_active');
	    
	    if($(e.delegateTarget).hasClass('header_search_active')) {
	        formInput.focus(); formInput[0].setSelectionRange(formInputValLength, formInputValLength);
	    }
	});
    
    /*
    ----------------------------------------------------------------------------------------------------------------*/
    
    $('.header-search__form').on('keyup', '.header-search__form-input', function(e) {
        const form  = $(e.delegateTarget),
        
              formInput = $(e.currentTarget), currentValue = formInput.val(),
              formClear = form.find('.header-search__form-clear');

	    currentValue ? formClear.show() : formClear.hide();
	});
	
	$('.header-search__form').on('click', '.header-search__form-clear', function(e) {
	    const form = $(e.delegateTarget),
	    
	          formInput = form.find('.header-search__form-input');
              formClear = form.find('.header-search__form-clear');
	    
	    formClear.hide(); formInput.attr('value', null);
	});
	
	/*
    ----------------------------------------------------------------------------------------------------------------*/
    
    $('.menu-item_search-form').on('keyup', '.menu-item_search-input', function(e) {
        const form  = $(e.delegateTarget),
        
              formInput = $(e.currentTarget), currentValue = formInput.val(),
              formClear = form.find('.menu-item_search-clear');

	    currentValue ? formClear.show() : formClear.hide();
	});
	
	$('.menu-item_search-form').on('click', '.menu-item_search-clear', function(e) {
	    const form = $(e.delegateTarget),
	    
	          formInput = form.find('.menu-item_search-input');
              formClear = form.find('.menu-item_search-clear');
	    
	    formClear.hide(); formInput.attr('value', null);
	});
	
	/*
    ----------------------------------------------------------------------------------------------------------------*/

    function initSticky() {
        if($('[data-sticky]').length) {
            $('[data-sticky]').each(function() {
                const $this = $(this);
                
                if($window.outerWidth() >= $this.data('width')) {
                    $this.stick_in_parent({
        			    recalc_every: 1,
        			    inner_scrolling: false,
        			    offset_top: getScrollPaddingTop() + 24
        			})
                    .on("sticky_kit:unstick", function() {
                        $this.css('top', null);
                    })
                    .on("sticky_kit:stick", function() {
                        $this.css('top', getScrollPaddingTop() + 24);
                    });
        		} else {
        			$this.trigger("sticky_kit:detach");
        		}    
            });
        }
    }
    
    /*
    ----------------------------------------------------------------------------------------------------------------*/
    
    function handlerLwptoc() {
        if($window.outerWidth() >= 896) {
    	    let currentHeaderHeight = ($header.hasClass('header_down')) ? headerHeight2 : headerHeight1;
    	    if($window.scrollTop() === 0) currentHeaderHeight = headerHeight1 - 14;
    	    
    		$('main .lwptoc_item').each(function() {
    		    const item = $(this), link = item.find('a'), hash = link[0].hash;
    		    const offset = $(hash).offset().top;
    
    		    if(hash !== '' && $(hash).length) {
    		        if($window.scrollTop() >= offset - 1 - (getAdminBarHeight() + currentHeaderHeight) - 24) {
    		            const nextItem = item.next('.lwptoc_item');
    		            
    		            if(nextItem.length) {
    		                const nextLink = nextItem.find('a'), nextHash = nextLink[0].hash, nextOffset = $(nextHash).offset().top;
    
    	                    $window.scrollTop() < nextOffset - 1 - (getAdminBarHeight() + currentHeaderHeight) - 24 ? item.addClass('active') : item.removeClass('active');
    		            } else if(item.is(':last-child')) item.addClass('active');
    		        } else {
    		            item.is(':first-child') ? item.addClass('active') : item.removeClass('active');
    		        }
    		    }
    		});
        }
	}

	/*
    ----------------------------------------------------------------------------------------------------------------*/

    $('header a[href^="#"], main a[href^="#"], footer a[href^="#"]').on('click', function(e) {
		e.preventDefault();
		
		const link = $(this);
		const hash = link[0].hash;

		if(hash !== '' && $(hash).length) {
		    const lwptocItem  = link.parent('.lwptoc_item');
		    const isLwptocItem = lwptocItem.length ? true : false;
		    const lwptocItems = lwptocItem.parent('.lwptoc_itemWrap').children();
		    
			headerHeight1 = parseInt($header.css('--header-height-1'));
	        headerHeight2 = parseInt($header.css('--header-height-2'));
	        
	        const elementOffsetTop = $(hash).offset().top; const addSpace = isLwptocItem ? 24 : 0;
	        let currentHeaderHeight = ($window.scrollTop() > elementOffsetTop) ? headerHeight1 : headerHeight2;

			if(isLwptocItem && $window.scrollTop() === 0) currentHeaderHeight = headerHeight1 - 14;

			$('html, body').animate({
				scrollTop: elementOffsetTop - (getAdminBarHeight() + currentHeaderHeight) - addSpace
			}, 500);
		}
		
		
	});
	
	/*
    ----------------------------------------------------------------------------------------------------------------*/
	
	$window.on('scroll', function() {
	    initSticky();
	    handlerLwptoc();
	});
	
	/*
    ----------------------------------------------------------------------------------------------------------------*/
	
	initSticky();
	handlerLwptoc();
	
	/*
    ----------------------------------------------------------------------------------------------------------------*/
    
    $window.on('message', function(e) {
	    if(url.pathname === '/free-trial/') {
	        const trustedOrigins = [
                window.location.origin,
                'https://app.hubspot.com'
            ];
	        
	        const data = e.originalEvent?.data;
	        
	        if(!trustedOrigins.includes(e.originalEvent?.origin)) {
                return;
            }
	        
	        if(data.type == 'hsFormCallback'
            && data.eventName == 'onFormSubmitted'
            && data.id == '7895933d-65c5-447b-a7d6-afdc054f2153') {
                const $wrap = $('.hbspt-handler[data-formid=' + data.id + ']');
                if(!$wrap.length) return;

                const $iframe = $wrap.find('iframe.hs-form-iframe');
                if(!$iframe.length) return;

                const $form = $($iframe.contents()[0].forms[0]);
                if(!$form.length) return;
                
                const formData = {
                    firstname: $form.find('[name="firstname"]').val() || '',
                    lastname:  $form.find('[name="lastname"]').val()  || '',
                    company:   $form.find('[name="company"]').val()   || '',
                    email:     $form.find('[name="email"]').val()     || '',
                    phone:     $form.find('[name="phone"]').val()     || '',
                    
                    visitor_management: false, digital_signage: false
                };
                
                const $solutions = $form.find('[name="solutions"]');
                
                if($solutions.length >= 2) {
                    formData.visitor_management = $solutions[0].checked;
                    formData.digital_signage    = $solutions[1].checked;
                }
                
                formData.form_id = data.id;

                $.ajax({
                	url : '/wp-json/gitlab/v1/trigger',
                	data: JSON.stringify(formData),
                	method: 'POST',
                	headers: {
                	    'Content-type': 'application/json',
                		'X-WP-Nonce': wp_data.nonce_rest
                	}
                });
            }
	    }
    });
});