$(document).ready(function() {
	$('nav > div').on('click', function() {
		var display = $(this).children().eq(0).css('display');	// children()為immidiate find()才為底下全部
		if (display === 'none') {
			$('nav > div > div').css({'display': 'none'});		// 全部藏起來
			$(this).children('div').css({'display': 'block'});	// 把點到的底下的div叫出來
		}
		else {
			// $('nav > div > div').css({'display': 'none'});		// 全部藏起來
			$(this).children('div').css({'display': 'none'});	// 把點到的底下的div叫出來
		}
	});
});