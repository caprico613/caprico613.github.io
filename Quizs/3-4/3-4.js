function up () {
	var buttonId = this.id;
	var target = document.getElementById(buttonId);
	var imgs = document.getElementsByTagName('img');

	for (let i = 0; i < imgs.length; i++) {
		if (imgs[i] === target) {
			imgs[i].style.opacity = '1';
			imgs[i].style.top = '-20px';
		}
		else {
			imgs[i].style.opacity = '0.5';
			imgs[i].style.top = '0px';
		}
	}
}

window.onload = function () {
	var buttons = document.getElementsByTagName('button');
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', up);
	}
}; 