function addMath(arg1, arg2) {
	return arg1 + arg2;
}

function subMath(arg1, arg2) {
	return arg2 - arg1;
}

function mulMath(arg1, arg2) {
	return arg1 * arg2;
}

function divMath(arg1, arg2) {
	return arg1 / arg2;
}

var basicMath = {
	add: addMath,
	substract: subMath,
	multiply: mulMath,
	divide: divMath
};

var num1 = 10;
var num2 = 21;
var num3 = 5;
var num4 = 17;
var num5 = 80;
var num6 = 4;

console.log('The sum of ' + num1 +' and ' + num2 + ' is ' +  basicMath.add(num1, num2));	// The sum of argument
console.log('The result of ' + num2 + ' minus ' + num1 + ' is ' + basicMath.substract(num1, num2));
console.log('The product of ' + num3 + ' and ' + num4 + ' is ' + basicMath.multiply(num3, num4));
console.log('The result of ' + num5 + ' / ' + num6 + ' is ' +  basicMath.divide(num5, num6));