'use strict';

$('main').on('click', '.challenge .stats, .challenge .close', function() {
	$(this).closest('.challenge').toggleClass('is-details');
});