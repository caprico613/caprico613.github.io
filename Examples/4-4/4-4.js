$(document).ready(function() {
	$('body > button').eq(0).on('click', function() {
		$('body > div').addClass('selected');	// 直接改class，來完成物件的改變
	});	

	$('body > button:nth-of-type(2)').on('click', function() {
		$('body > div').removeClass('selected');	// 直接改class，來完成物件的改變
	});	
});