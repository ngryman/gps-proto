'use strict';

$('main').on('tap', '.challenge .stats, .challenge .close', function() {
	$(this).closest('.challenge').toggleClass('is-details');
});