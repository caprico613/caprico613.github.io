var num1 = 1 + 5, num2 = 1 - 5 * 40;

console.log(num1);
console.log(num2);

var num3 = num1 + num2;

console.log(num3);

// 字串+數字，會把數字也變成字串
var str = "A number: ";
console.log(str + num3);

// 字串、數字 加減乘除，一樣乘除最優先，然後只要先遇到字串，後面的數字都會變成字串，串連在一起
var test1 = "Value: " + 5 + 10;  // Value: 510
var test5 = "Value: " + (5 + 10);  // Value: 15
var test2 = 5 + 10 + "Value: ";  // 15Value:
var test3 = "Value: " + 5 * 10;	 // Value: 50
var test4 = "Value: " + 5 - 10;	 // NaN

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);

var numAsNum = 5, numAsStr = '5';

console.log(numAsNum + numAsStr);
console.log(numAsNum - numAsStr);

// Error
// var str1 = "This is a value," str2 = 'value';
// console.log(str1 - str2);