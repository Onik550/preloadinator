;(function($) {
	$.fn.preloadinator = function(options) {
		'use strict';

		var settings = $.extend({
		}, options),
		preloader = this;

		$(window).on('load', function() {
			$(preloader).fadeOut();
		});

	    return this;
	}
}(jQuery));