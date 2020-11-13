var numArray = [1, 5, 2, 11, 7];

console.log(numArray);

// The first element position is 0
console.log(numArray[0]); // 1

console.log('\n');

console.log(numArray[1]); // 5

var mixedArray = [1, "hello!", "yes!", 9, 87]	// bad practice
console.log(mixedArray[0]+mixedArray[1])

var emptyArray = [];
emptyArray[0] = 2;
console.log(emptyArray);

emptyArray[3] = 9;			// avoid, it can work, but 0到3位置中間就會是undefine
console.log(emptyArray);
