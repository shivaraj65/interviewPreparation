// [28] Find the Union of Two Arrays in JavaScript?

let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 3, 4, 5, 6];

let unionArr = new Set([...arr1, ...arr2]);

console.log([...unionArr]);