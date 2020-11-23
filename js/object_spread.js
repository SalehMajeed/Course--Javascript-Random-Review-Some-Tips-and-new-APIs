const user = {
  name: "anony",
  age: 19,
  scores: [90, 85],
};

const copied = { ...user, age: 60, occupation: "developer" };
// const copied2 = Object.assign({}, copied, {
//   age: 60,
//   occupation: "developer",
// });

// console.log(copied);
// console.log(copied2);

// const { name, age, ...other } = copied;

// console.log(name, age, other);

copied.scores.push(4);

console.log(user, copied);
