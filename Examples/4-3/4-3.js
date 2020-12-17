$(document).ready(function() {
	$('body > button').on('click', function() { // 沒有eq，就是所有符合條件的元件
		// em.style.backgroundColor = "green";
		// $('body > div').css('background-color', 'green');	// 和上面一樣
																// 只改一個參數
		$('body > div').css(
			{
				'background-color': 'green',
				'height': '70px',
				'width': '70px'
			}
		);
	});	
});