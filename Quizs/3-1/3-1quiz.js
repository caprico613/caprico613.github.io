var longArray = [78, 12, 5, 6, 19, 67, 1, -56, 10];

// Replace the third and seventh with 100 and 1000 respectively.
longArray[2] = 100;
longArray[6] = 1000;
console.log(longArray);

// Calculate the product of the first, second, seventh values.
console.log(longArray[0] * longArray[1] * longArray[6]);

// Devide the last value by the first three values
console.log(longArray[8] / longArray[0] / longArray[1] / longArray[2]);

console.log(longArray.length)