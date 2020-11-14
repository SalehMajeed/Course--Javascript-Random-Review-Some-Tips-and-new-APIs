const my_array = [
  ["search", "dogs"],
  ["page", 2],
];
const my_map = new Map();

my_map.set("name", "anony");
my_map.set("age", 19);

const my_obj = Object.fromEntries(my_map);
console.log(my_obj);

console.log(Object.fromEntries(my_array));
