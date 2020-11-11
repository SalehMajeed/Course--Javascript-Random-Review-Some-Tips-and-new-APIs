const person = {
  name: "anony",
  age: 19,
  occupation: "developer",
};

const number = [10, 20, 40];

function dcode(e) {
  e.name = "persona";
  console.log(e);
}

dcode(person);

console.log(person);

function array_dcode(array) {
  array.push(4);
  console.log(array);
}

array_dcode(number);
console.log(number);
