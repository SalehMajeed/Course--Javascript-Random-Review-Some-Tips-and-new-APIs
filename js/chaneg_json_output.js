// const person = {
//   name: "anony",
//   age: 19,
//   toJSON() {
//     return `this is ${this.name}`;
//   },
// };

// const data_obj = {
//   data: person,
// };

// console.log(JSON.stringify(data_obj));

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   toJSON() {
//     return `this is ${this.name}`;
//   }
// }

// const data_obj = {
//   data: new Person("anony", 19),
// };

// console.log(JSON.stringify(data_obj));

HTMLElement.prototype.toJSON = function () {
  //   return `<` + this.tagName.toLowerCase() + `>`;
  return this.outerHTML;
};

const h1 = document.querySelector("h1");
const data_obj = {
  data: h1,
};

console.log(JSON.stringify(data_obj));
