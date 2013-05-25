/*! gps-proto - v0.0.2 - 2013-05-25
* Copyright (c) 2013 ; Licensed GPS */

(function(){function require(e,t){for(var n=[],r=e.split("/"),i,s,o=0;(s=r[o++])!=null;)".."==s?n.pop():"."!=s&&n.push(s);n=n.join("/"),o=require,s=o.m[t||0],i=s[n+".js"]||s[n+"/index.js"]||s[n],r='Cannot require("'+n+'")';if(!i)throw Error(r);if(s=i.c)i=o.m[t=s][e=i.m];if(!i)throw Error(r);return i.exports||i(i,i.exports={},function(n){return o("."!=n.charAt(0)?n:e+"/../"+n,t)}),i.exports};
require.m = [];
require.m[0] = { "app.js": function(module, exports, require){'use strict';

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
});}};
undefined = require('app.js');
}());