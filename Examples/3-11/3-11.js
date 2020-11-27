// querySelect

window.onload = function () {
	var em = document.querySelector('article > p');	// 跟css一模一樣	//但只找第一個
	em.style.color = 'red';

	var ems = document.querySelectorAll('article > p');	// 回傳所有符合條件的元件
	ems[1].style.color = 'cyan';
	ems[0].style.color = 'blue';
};