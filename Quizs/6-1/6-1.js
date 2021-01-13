$(document).ready(function() {
	$('div').on('mouseenter', function() {
		
		var l = Math.random() * $(document).width();
		var t = Math.random() * $(document).height();
		if (l > $(document).width() - $('div').css("width")) {
			l = l - $('div').css("width");
		}
		if (t > $(document).height() - $('div').css("height")) {
			l = l - $('div').css("height");
		}
		$('div').animate({'left': l, 'top': t});
	});
	// use .on() to add an event listener to DIVs
	// use $(document).width() to obtain viewport width
	// use $(document).height() to obtain viewport height
	// use Math.random() to get a random number between 0 and 0.99999999999...
});