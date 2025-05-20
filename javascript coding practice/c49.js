// [49]Count Vowels in a String in JavaScript?

const input = "test string";

const vowelsCount = (str) => {
  const arr = str.split("");

  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (["a", "e", "i", "o", "u"].includes(arr[i])) {
      count++;
    }
  }
  return count;
};

const result = vowelsCount(input);
console.log(result);
