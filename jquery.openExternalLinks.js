/** jQuery openExternalLinks Plugin
*
*	Created by Warren L. Parsons
*	Copyright 2012
*
*/


(function($){
	$.fn.setExternalLinks = function(exceptions){

		$(this).on('click', 'a[href^="http"]', function(e){

			if ( $(this).is(exceptions) ) {
				return $(this);
			}

			e.preventDefault();
			window.open(this.href);

		});

		return $(this);
	};

})(jQuery);