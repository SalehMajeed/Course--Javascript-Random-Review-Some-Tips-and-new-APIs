const numbers = [1, 2, 3, [4, 5, [6, 7, 8, [9, 10]]]];
console.log(numbers.flat());
console.log(numbers.flat(0)); // same as numbers
console.log(numbers.flat(1)); // same as flat()
console.log(numbers.flat(Infinity)); // flat array
