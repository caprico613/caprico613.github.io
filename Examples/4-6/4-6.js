$(document).ready(function() {
	$('nav > div > div:first-of-type').on('click', function() {
		var display = $(this).siblings('div').eq(0).css('display')
		if (display === 'none') {
			$('nav > div > div:not(:nth-of-type(1))').css({'display': 'none'});
			$(this).siblings('div').css({'display': 'block'});			
		}
		else {
			$(this).siblings('div').css({'display': 'none'});		
		}
	});
});