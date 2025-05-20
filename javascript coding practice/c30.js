// [30] Write a Program to find the minimum value in an array in JavaScript?

let numbers = [2, 3, 4, 5, 0];

const minValFinder = (arr) => {
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
};

const result = minValFinder(numbers);
console.log(result);

