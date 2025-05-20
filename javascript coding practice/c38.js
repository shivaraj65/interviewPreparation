// [38]Remove falsy Values from an array in JavaScript?

let input = ["sdf", false, "esdf", null, undefined, "", "grt", "123"];

let result = [];
for (let i = 0; i < input.length; i++) {
  if (input[i]) result.push(input[i]);
}

console.log(result);
