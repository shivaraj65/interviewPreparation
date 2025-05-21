// [51] Write a JavaScript program to find the largest element in a nested array.

const input = [[1, 2, 3, 4, 5], [6, 7, 8, 20], 9, 0, 3];

let result = input.flat().sort((a, b) => a - b);

console.log(result[result.length - 1]);
