// [17]Write a Program to print Fibonacci sequence up to n terms?

const fiboGenerator = (num) => {
  let numberList = [];
  for (let i = 0; i < num; i++) {
    if (i === 0) {
      numberList.push(0);
    } else if (i <= 1) {
      numberList.push(1);
    } else {
      let lastElem = numberList[numberList.length - 1];
      let lastPreviousElem = numberList[numberList.length - 2];
      numberList.push(lastElem + lastPreviousElem);
    }
  }
  return numberList;
};

const result = fiboGenerator(10);
console.log(result);
