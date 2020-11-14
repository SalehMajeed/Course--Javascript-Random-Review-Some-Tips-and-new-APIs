const o = {
  name: "anony",
  age: 19,
};

Object.seal(o);

o.name = "persona";

o.occupation = "developer";

console.log(o);
console.log(Object.isSealed(o));
