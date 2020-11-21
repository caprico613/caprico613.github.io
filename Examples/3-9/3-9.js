window.onload = function() {
	var allDivs = document.getElementsByTagName('div');	// 回傳是div的東西，按照先後順序存在陣列裡，在給allDivs
	console.log(allDivs[0]); 
	var allAudios = document.getElementsByTagName('audio');	// 如果網頁沒有這個元件，就會回傳一個空的陣列
	console.log(allAudios[0]);
};