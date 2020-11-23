const user = {
  name: "anony",
  age: 19,
  occupation: "developer",
};

for (const keys of Object.keys(user)) {
  console.log(keys, user[keys]);
}

console.log(Object.values(user));

for (const [key, value] of Object.entries(user)) {
  console.log(`${key} => ${value}`);
}
