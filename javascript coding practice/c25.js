// [25]write a Program to sort an array in Descending Order in JavaScript?

const arraySorter = (arr) => {
  if (Array.isArray(arr)) return arr.sort().reverse();
  return null;
};

const result = arraySorter([3, 6, 5, 4, 1, 2]);
console.log(result);
