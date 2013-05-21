'use strict';

$('main').on('tap', '.challenge .stats, .challenge .close', function() {
    $(this).closest('.challenge').toggleClass('is-details');
});

(function headerCursorBehavior() {
    var $navCursor = $('.nav-cursor'),
        $navItems = $('.nav-item');

    $navItems.on('tap', function() {
        var $this = $(this);

        $navItems.removeClass('is-selected');
        $this.addClass('is-selected');

        var pos = $this.position().left + ($this.outerWidth() - $this.closest('nav').innerWidth()) / 2;
        $navCursor.css('transform', 'translateX(' + pos + 'px)');
    });
})();

