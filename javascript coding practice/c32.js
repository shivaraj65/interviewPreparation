// [32]Find the First Non-Repeated Character in a String in JavaScript?

const str = "hello this is a test string";

const characterCount = (value) => {
  let counter = new Object();
  const arr = value.split("");

  for (let i = 0; i < arr.length; i++) {
    counter[arr[i]] = counter[arr[i]] ? counter[arr[i]] + 1 : 1;
  }

  return counter;
};

const result = characterCount(str);
let finalResult=null;
Object.keys(result).map((character) => {
  if (result[character] === 1 && !finalResult)  finalResult = character;
});

console.log(finalResult);
