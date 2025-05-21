// [53] Implement a function that flattens a nested array in JavaScript, converting it into a single-level array.

let input = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 20, [11, 12, [13, 14, [15, 16]]]],
  9,
  0,
  3,
];

while (input.some((elem) => Array.isArray(elem))) {
  input = input.flat();
}

console.log(input);
