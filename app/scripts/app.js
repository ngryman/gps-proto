'use strict';

$('main').on('tap', '.challenge .stats, .challenge .close', function() {
	$(this).closest('.challenge').toggleClass('is-details');
});

$.Finger.flickDuration = 500;
$('.challenge').on('flick', '.proof-image', function(e) {
	var $selected = $('.is-selected', this),
		$newSelected;

	$newSelected = e.direction < 0 ? $selected.next('img') : $selected.prev('img');

	if ($newSelected.length) {
		$selected.removeClass('is-selected');
		$newSelected.addClass('is-selected');
	}
});