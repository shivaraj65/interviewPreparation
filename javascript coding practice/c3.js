// [3]Find the largest number in an array in JavaScript.

let testArr = [1, 23, 123, 9999, 534, 45, 6, 567, 567, 234];
let max = 0;
testArr.map((num) => {
  if (num > max) max = num;
});
console.log(max);
