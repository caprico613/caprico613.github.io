window.onload = function() {
	// $ = jQuery
	document.querySelectorAll('body > p:last-of-type');
	$('body > p:last-of-type');	// 和上一行相等

	var ems = $('body > p');
	console.log(ems[0].innerHTML);

	console.log($('body > p').eq(0).html());	// eq(0)=>找到的第一個 // 跟上面一樣
	console.log($('body > p').eq(-1).html());	//eq(-1)=>找到的最後一個
	$('body > p').eq(1).html('Change by jQuery');

	console.log($('body > p.special').eq(1).html());
};