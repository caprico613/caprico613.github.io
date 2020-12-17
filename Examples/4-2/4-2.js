// 架構好了，就做這些
$(document).ready(function() {
	/*
	document.querySelectorAll('body > button')[0].addEventListener('click', function() {
		alert('Button 1 clicked!');
	});*/

	// 跟上面一樣
	$('button').eq(0).on('click', function() {
		alert('Button 1 clicked!');
		$(this).off('click');	// 把click的功能拔掉
	});

	// $('button').eq(1).on('click', function() {
	// 	alert('Button 2 clicked!');
	// });

	kk = $('button').eq(1)
	kk.on('click', function() {
		alert('Button 2 clicked!');
	});
});