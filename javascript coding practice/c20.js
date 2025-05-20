// [20]Write a Program to print the frequency of elements in an array?

const frequencyMapper = (arr) => {
  let counter = new Object();

  for (let i = 0; i < arr.length; i++) {
    counter[arr[i]] = counter[arr[i]] ? counter[arr[i]] + 1 : 1;
  }
  return counter;
};

const result = frequencyMapper([1, 2, 3, 1, 3, 5, 7, 5, 6, 2]);
console.log(result);

