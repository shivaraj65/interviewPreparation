// [46]Check if Two Strings are Anagrams or not in JavaScript?

const input1 = "ten";
const input2 = "net";

const isAnagram = (inp1, inp2) => {
  const arr1 = inp1.split("");
  const arr2 = inp2.split("");
  if (arr1.length !== arr2.length) return false;

  const obj1 = new Object();
  const obj2 = new Object();

  for (let i = 0; i < arr1.length; i++) {
    obj1[arr1[i]] = obj1[arr1[i]] ? obj1[arr1[i]] + 1 : 1;
    obj2[arr2[i]] = obj2[arr2[i]] ? obj2[arr2[i]] + 1 : 1;
  }
  for (let i = 0; i < Object.keys(obj1).length; i++) {    
    const letter = Object.keys(obj1)[i]
    if (obj1[Object.keys(obj1)[i]] !== obj2[letter]) {
      return false;
    }
  }
  return true;
};

const result = isAnagram(input1, input2);
console.log(result);
