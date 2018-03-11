;(function($) {
	$.fn.preloadinator = function(options) {
		'use strict';

		var settings = $.extend({
			scroll: false,
			minTime: 0,
			animation: 'fadeOut',
			animationDuration: 400
		}, options),
		preloader = this,
		start = new Date().getTime();

		$.fn.preloadinator.disableScroll = function() {
			$('body').css('overflow', 'hidden');
		}

		$.fn.preloadinator.enableScroll = function() {
			$('body').css('overflow', 'auto');
		}

		$.fn.preloadinator.removePreloader = function() {
			$(preloader)[settings.animation](settings.animationDuration, function() {
				if(settings.scroll === false) { $.fn.preloadinator.enableScroll(); }
			});	
		}

		$.fn.preloadinator.minTimeElapsed = function() {
			var now = new Date().getTime(),
			elapsed = now - start;

			if(elapsed >= settings.minTime) {
				return true;
			}
			else {
				return false;
			}
		}

		if(settings.scroll === false) { $.fn.preloadinator.disableScroll(); }

		$(window).on('load', function() {
			if($.fn.preloadinator.minTimeElapsed()) {
				$.fn.preloadinator.removePreloader();
			}
			else {
				var now = new Date().getTime(),
				elapsed = now - start;

				setTimeout($.fn.preloadinator.removePreloader, settings.minTime - elapsed);
			}
		});

	    return this;
	}
}(jQuery));