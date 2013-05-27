'use strict';

// always prevent default browser behaviors
$.Finger.preventDefault = true;
// change default flick time to 500ms
$.Finger.flickDuration = 500;

$('main').on('tap', '.challenge .stats, .challenge .close', function() {
    $(this).closest('.challenge').toggleClass('is-details');
});

$('main').on('flick', '.challenge .proof-photos', function(e) {
	var $selected = $(this).find('.is-selected'),
		$newSelected;

	if ('horizontal' != e.orientation) return;

	$newSelected = e.direction < 0 ? $selected.next('img') : $selected.prev('img');
	if ($newSelected.length) {
		$selected.removeClass('is-selected');
		$newSelected.addClass('is-selected');
	}
});

(function headerCursorBehavior() {
	$('.nav-item').on('tap', function() {
        var $this = $(this), pos;

		// as logo is position with left 50% and jquery returns this value, this is much simple to explicitly set 0
		// to translateX in order to get back to default position
		if ($this.hasClass('nav-logo')) {
			pos = 0;
		}
		else {
			pos = $this.position().left + $this.outerWidth() / 2 - $('#nav').innerWidth() / 2;
			// ensure that pos is an integer to avoid unwanted blurry effects
			pos = Math.floor(pos);
		}

		// batch dom changes
		$this.addClass('is-selected');
		$('.nav-item.is-selected').removeClass('is-selected');
		$('.nav-cursor').css('transform', 'translateX(' + pos + 'px)');
    });
})();
