window.onload = function() {
	var allGroupEm = document.getElementsByClassName('group1');	// 回傳是class 是 group1的東西，按照先後順序存在陣列裡，在給allDivs
	var groupEm = allGroupEm[0];	// 會改到原本的元件哦，應該是call by reference
	console.log(groupEm);	// groupEM 元件本身
	console.log(groupEm.innerHTML);	// groupEM 元件的內容(文字)
	groupEm.innerHTML = 'New Content Changed';
	console.log(groupEm.innerHTML);	// groupEM 元件的內容(文字)
	var idEm = document.getElementById('no2');	// 只會找到第一個 id 是 no2 的元件，因為id就常理來說會有唯一性，所以才是 getElement(沒有s)
	idEm.innerHTML = 'No.2 change!!!!'
	console.log(idEm);
	idEm.style.color = 'red';
};