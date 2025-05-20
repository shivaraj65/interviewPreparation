// [24]Write a Program to sort an array in Ascending Order in JavaScript?

const arraySorter = (arr) => {
  if (Array.isArray(arr)) return arr.sort();
  return null;
};

const result = arraySorter([3, 6, 5, 4, 1, 2]);
console.log(result);
