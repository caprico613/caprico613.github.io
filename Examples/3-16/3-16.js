function changeAllBgs() {
	var targets = document.getElementsByTagName('div');
	for (let i = 0; i < targets.length; i++) {
		if(targets[i].id !== "noChange")
			targets[i].style.backgroundColor = "pink";
	}
}

window.onload = function () {
	var button = document.getElementById('changeAll');
	button.addEventListener('click', changeAllBgs);
}; 