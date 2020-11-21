



{
	var num = 5;
}
console.log(num);

// 建立變數部分會最先執行
// 跟下面這一段一樣，像全域變數
// var num;
// {
// 	num = 5;
// }
// console.log(num);


// let 在code block外面是找不到的，區域變數
// 所以下面這行會undefine

{
	let anotherNum = 5;
}
console.log(anotherNum);
