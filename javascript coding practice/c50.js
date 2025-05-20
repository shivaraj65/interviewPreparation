// [50]Get Unique Characters from a String in JavaScript?

const input = "test string REQ";

let result = [...new Set(input.split(''))].sort();
result.shift();
console.log(result);
