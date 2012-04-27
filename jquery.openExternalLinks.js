/**
*	jQuery openExternalLinks Plugin
*
*	Plugin to open links with fully-qualified URLs in a new browser window
*
*	- Accepts one optional argument, which is a jQuery selector for elements that should be ignored
*
*	Sample usage:
*	$('body').openExternalLinks('.colorbox');
*
*	This will load all fully-qualified URLs except those with a class of "colorbox"
*	in a new browser window.
*
*	Created by Warren L. Parsons
*	Copyright 2012
*/

(function($){
	$.fn.openExternalLinks = function(exceptions){

		$(this).on('click', 'a[href^="http"]', function(e){

			// If this link matches the list of exceptions, return
			if ( $(this).is(exceptions) ) {
				return $(this);
			}

			e.preventDefault();

			// Open link in new browser window
			window.open(this.href);

		});

		return $(this);
	};

})(jQuery);