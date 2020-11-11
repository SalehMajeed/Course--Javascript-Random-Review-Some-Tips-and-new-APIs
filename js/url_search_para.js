const query_string = "name=anony&age=19&occupation=developer";
const usp = new URLSearchParams(query_string);

const name = usp.get("name");
console.log(name);

usp.set("age", "18");
usp.set("new", "do not know");

for (const [key, value] of usp) {
  console.log(key, value);
}
console.log(usp.toString());
