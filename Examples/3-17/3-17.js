var color = ["red", "blue", "pink", "purple", "red"];

function changeBg () {
	var buttonId = this.id;
	var divs = document.getElementsByTagName('div');
	for (let i = 0; i < divs.length; i++) {
		var div = divs[i];
		if (div.id === buttonId + 'Div')
			div.style.backgroundColor = 'green';
	}
	

	
	
	/* target.style.backgroundColor 取的是inline的值，所以抓不到css的值
	for (var i = 0; i < 4; i++) {
		if (target.style.backgroundColor == color[i]) {
			target.style.backgroundColor = color[i+1];
			console.log(color[i]);
			break;

		}
	}*/
}

window.onload = function () {

	var buttons = document.getElementsByTagName('button');
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', changeBg);
	}
}; 