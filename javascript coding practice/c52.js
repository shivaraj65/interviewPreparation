// [52] Implement a deep clone function in JavaScript that creates a copy of a nested object or array without any reference to the original.

const input = [[1, 2, 3, 4, 5], [6, 7, 8, 20], 9, 0, 3];

let deepClone = [...input];

deepClone.push(20);

console.log(input);
console.log(deepClone);
