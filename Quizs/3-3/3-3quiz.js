function resetBg() {
	var em = document.getElementById('item1');
	em.style.backgroundColor = 'red';
	em = document.getElementById('item2');
	em.style.backgroundColor = 'red';
	em = document.getElementById('item3');
	em.style.backgroundColor = 'red';
	em = document.getElementById('item4');
	em.style.backgroundColor = 'red';
}

// compare to 3-13 每一個每一個更改，this 更強大 XDD
function changeBg1() {

	var em1 = document.querySelector('div:nth-of-type(1)');
	var em2 = document.querySelector('div:nth-of-type(2)');
	var temp = em1.style.backgroundColor;
	em1.style.backgroundColor = em2.style.backgroundColor;
	em2.style.backgroundColor = temp;
}

function changeBg2() {

	var em1 = document.getElementById('item2');
	var em2 = document.getElementById('item3');
	var temp = em1.style.backgroundColor;
	em1.style.backgroundColor = em2.style.backgroundColor;
	em2.style.backgroundColor = temp;
}

/*
function changeBg1() {
	var em1 = document.getElementById('item1');
	var em2 = document.getElementById('item2');
	var temp = em1.style.backgroundColor;
	em1.style.backgroundColor = em2.style.backgroundColor;
	em2.style.backgroundColor = temp;
}*/


window.onload = function() {
	var em = document.getElementById('switch12');
	em.addEventListener('click', changeBg1);
	// 把事件貼上這個元件

	// 更換元件
	em = document.getElementById('switch23');
	em.addEventListener('click', changeBg2);
};