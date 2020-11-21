// window

var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

// console.log(winWidth + ' / ' + winHeight);


// 當網頁全部都讀取完之後，會跑來window.onload執行裡面的程式，
// 才不會找不到網頁裡面的某個元件
window.onload = function () {
	// alert('Website is ready!');

	// window.document = document
	var websiteTitle = window.document.title;
	console.log(websiteTitle);
	var anotherTitle = document.title;
	console.log(anotherTitle);
};