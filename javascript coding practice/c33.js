// [33]Find the Longest Word in a String in JavaScript?

const str = "hello this is a test string";

const longestWord = (value) => {
  const arr = value.split(" ");
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > arr[index].length) index = i;
  }
  return arr[index];
};

const result = longestWord(str);

console.log(result);
