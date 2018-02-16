;(function($) {
	$.fn.preloadinator = function(options) {
		'use strict';

		var settings = $.extend({
			scroll: false,
			minTime: 0
		}, options),
		preloader = this,
		start = new Date().getTime();

		function disableScroll() {
			$('body').css('overflow', 'hidden');
		}

		function enableScroll() {
			$('body').css('overflow', 'auto');
		}

		function removePreloader() {
			$(preloader).fadeOut(function() {
				if(settings.scroll === false) { enableScroll(); }
			});			
		}

		function minTimeElapsed() {
			var now = new Date().getTime(),
			elapsed = now - start;

			if(elapsed >= settings.minTime) {
				return true;
			}
			else {
				return false;
			}
		}

		if(settings.scroll === false) { disableScroll(); }

		$(window).on('load', function() {
			if(minTimeElapsed()) {
				removePreloader();
			}
			else {
				var now = new Date().getTime(),
				elapsed = now - start;

				setTimeout(removePreloader, settings.minTime - elapsed);
			}
		});

	    return this;
	}
}(jQuery));