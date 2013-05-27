/*! gps-proto - v0.0.2 - 2013-05-26
* Copyright (c) 2013 ; Licensed GPS */

(function(){function require(e,t){for(var n=[],r=e.split("/"),i,s,o=0;(s=r[o++])!=null;)".."==s?n.pop():"."!=s&&n.push(s);n=n.join("/"),o=require,s=o.m[t||0],i=s[n+".js"]||s[n+"/index.js"]||s[n],r='Cannot require("'+n+'")';if(!i)throw Error(r);if(s=i.c)i=o.m[t=s][e=i.m];if(!i)throw Error(r);return i.exports||i(i,i.exports={},function(n){return o("."!=n.charAt(0)?n:e+"/../"+n,t)}),i.exports};
require.m = [];
require.m[0] = { "app.js": function(module, exports, require){'use strict';

// change default flick time to 500ms
$.Finger.flickDuration = 500;

$('main').on('tap', '.challenge .stats, .challenge .close', function() {
    $(this).closest('.challenge').toggleClass('is-details');
});

$('main').on('flick', '.challenge .proof-photos', function(e) {
	var $selected = $(this).find('.is-selected'),
		$newSelected;

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
}};
gps = require('app.js');
}());