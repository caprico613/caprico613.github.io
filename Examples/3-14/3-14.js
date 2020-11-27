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
function changeBg() {
	// this 代表是誰觸發的
	var emId = this.id;
	var em = document.getElementById(emId);
	em.style.backgroundColor = 'blue';
	// this.style.backgroundColor = 'blue';
}

window.onload = function() {
	var em = document.getElementById('item1');
	em.addEventListener('click', changeBg);
	// 把事件貼上這個元件

	// 更換元件
	em = document.getElementById('item2');
	em.addEventListener('click', changeBg);
	em = document.getElementById('item3');
	em.addEventListener('click', changeBg);
	em = document.getElementById('item4');
	em.addEventListener('click', changeBg);
};