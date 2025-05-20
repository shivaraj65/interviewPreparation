// [4]How Remove the first element from an array in JavaScript?

let arr = [1, 2, 3, 4, 5];

arr.reverse();
arr.pop();
arr.reverse();
console.log(arr);

// or
arr.shift();
console.log(arr);

//or
arr = arr.slice(1);
console.log(arr);
