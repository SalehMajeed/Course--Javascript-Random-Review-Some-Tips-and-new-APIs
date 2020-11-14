const person = {
  name: "anony",
  age: 19,
};

for (const [key, value] of Object.entries(person)) {
  console.log(key, value);
}

const params = new URLSearchParams(Object.entries(person));

console.log(params.toString());
