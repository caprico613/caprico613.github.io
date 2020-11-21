// function 在建立的時候，會幫你在最前面的時候就建立好，有點像var，是global一樣

function actionCompleted () {
	alert('Completed');
}
actionCompleted();

// weird, but still work
/*
actionCompleted();
function actionCompleted () {
	alert('Completed');
}
*/

// 下面的方法(用var建立)不會在最前面建立好，只會在執行到該行才建立
var actionCompletedAgain = function () {
	alert('Completed again!');
}

actionCompletedAgain();

// wrong
/*
actionCompletedAgain();
var actionCompletedAgain = function () {
	alert('Completed again!');
}*/

function popupMsg(msg, msg1 = 'default value') {	// msg1 如果沒有收到值，就會試deault給的值，這裡我設定default value
	var finalMsg = 'Site message ' + msg + ', ' + msg1 + '!';
	alert(finalMsg);
}

popupMsg("msg is here", "msg1 is here");
popupMsg("msg is here");	// msg1 參數會被改成undefined 直接寫上去XDD


function complexCalc(x, y) {
	var result = 0;
	result = x * y;
	return result;
}

var finalResult = complexCalc(5, 10);
alert(finalResult);

var demoFuncs = {
	popupMsgFunc: popupMsg,
	complexCalcFunc: complexCalc,
	tt: function () {
		alert('tt');
	}

};

demoFuncs.popupMsgFunc('Victor', 'second part!')
demoFuncs.tt();