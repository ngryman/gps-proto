'use strict';

$('main').on('click', '.challenge .stats', function() {
	$(this).closest('.challenge').toggleClass('is-details');
});