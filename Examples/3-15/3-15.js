var color = ["red", "blue", "pink", "purple", "red"];

function changeBg () {
	var buttonId = this.id;
	var target = document.getElementById(buttonId + 'Div');
	
	if (target) {
		
		if (buttonId === "block1")
			target.style.backgroundColor = 'yellow';
		else if (buttonId === 'block2'){
			target.style.backgroundColor = "orange";
		}
		else {
			target.style.backgroundColor = "green";
		}
		if (buttonId === 'block1' || buttonId === 'block2')
			target.style.backgroundColor = "yellow";
		else
			target.style.backgroundColor = "green";
	}
	else {
		alert('No element found ' + buttonId + ' Div');
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
	// let condition = 5 > 1;
	// let condition = '5' == 5;	// 會是true, 他會先幫你試著把字串轉換成數字(會做類型的轉換)
	// let condition = '5' === 5;		// 會是false, 他會順便看typ
	/* let condition = '5' !== 5;		// 會是true, 他會順便看type

	// 神奇的 === !==
	if (condition) {
		console.log('true');
	}
	else {
		console.log('false');
	}*/
	var buttons = document.getElementsByTagName('button');
	buttons[0].addEventListener('click', changeBg);
	buttons[1].addEventListener('click', changeBg);
	buttons[2].addEventListener('click', changeBg);
	buttons[3].addEventListener('click', changeBg);
}; 