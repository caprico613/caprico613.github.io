$(document).ready(function() {
	$('#hideDiv').on('click', function() {
		$('div').hide(1000);	// 1000ms
	});

	$('#showDiv').on('click', function() {
		$('div').show(2000);	// 2000ms
	});
});