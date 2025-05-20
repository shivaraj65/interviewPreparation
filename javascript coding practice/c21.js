// [21] Write a Program to count the occurrences of a character in a string in JavaScript?

const characterCounter = (sentence) => {
  let counter = new Object();
  const arr = sentence.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== " ")
      counter[arr[i]] = counter[arr[i]] ? counter[arr[i]] + 1 : 1;
  }

  return counter;
};

const result = characterCounter("Hi this is a sentence");
console.log(result);
