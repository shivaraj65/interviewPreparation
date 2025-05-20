// [29]Check if a Number is Even or Odd in JavaScript?

const oddEven = (number) => {
  if (number % 2 === 0) return "EVEN";
  return "ODD";
};

const result = oddEven(11);
console.log(result);
