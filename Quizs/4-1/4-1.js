$(document).ready(function() {
	$('body > button').eq(0).on('click', function() {
		// $('body > div').removeClass('selected');
		// $('body > div:nth-of-type(odd)').addClass('selected');	// 直接改class，來完成物件的改變
		$(this).siblings('div').css({'width': '50px', 'height': '50px'});
		$(this).siblings('div:nth-of-type(odd)').css({'width': '100px', 'height': '100px'});	
	});
	$('body > button').eq(1).on('click', function() {
		// $('body > div').removeClass('selected');
		// $('body > div:nth-of-type(even)').addClass('selected');	// 直接改class，來完成物件的改變
		$(this).siblings('div').css({'width': '50px', 'height': '50px'});
		$(this).siblings('div:nth-of-type(even)').css({'width': '100px', 'height': '100px'});	
	});	
	$('body > button').eq(2).on('click', function() {		
		// $('body > div').removeClass('selected');	// 直接改class，來完成物件的改變
		$(this).siblings('div').css({'width': '50px', 'height': '50px'});
	});		
});