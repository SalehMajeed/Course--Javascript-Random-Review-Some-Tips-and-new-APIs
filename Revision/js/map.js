let map = new Map();

map.set("key", "value");
map.set("another_key", "another_value");

map.set(NaN, "not a number");

console.log(map.has("key"));
console.log(map.get("another_key"));
console.log(map.size);
console.log(map.keys());
console.log(map.values());
console.log(map.entries());
console.log(map);
console.log(map.delete("key"));

console.log(map.get(NaN));
