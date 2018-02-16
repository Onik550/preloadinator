;(function($) {
	$.fn.preloadinator = function(options) {
		'use strict';

		var settings = $.extend({
			scroll: false
		}, options),
		preloader = this;

		function disableScroll() {
			$('body').css('overflow', 'hidden');
		}

		function enableScroll() {
			$('body').css('overflow', 'auto');
		}

		if(settings.scroll === false) {
			disableScroll();
		}

		$(window).on('load', function() {
			$(preloader).fadeOut(function() {
				if(settings.scroll === false) {
					enableScroll();
				}
			});
		});

	    return this;
	}
}(jQuery));