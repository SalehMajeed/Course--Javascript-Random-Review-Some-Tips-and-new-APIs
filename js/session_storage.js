sessionStorage.setItem("name", "persona");

var obj = { name: "anony", age: 19 };
sessionStorage.setItem("person", JSON.stringify(obj));

console.log(sessionStorage.getItem("key"));
console.log(JSON.parse(sessionStorage.getItem("person")));

for (let i = 0; i < sessionStorage.length - 1; i++) {
  let key = sessionStorage.key(i);
  console.log(`${key} and value of the key is ${sessionStorage.getItem(key)}`);
}
