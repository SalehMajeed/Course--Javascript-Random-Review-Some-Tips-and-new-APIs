function my_function() {
  const args_array = Array.from(arguments);
  // console.log(args_array);
}

my_function(1, "anony", { name: "persona" });

const elements = document.querySelectorAll("*");
const el_array = Array.from(elements);

// console.log(el_array);

const name = "persona";

const str_array = Array.from(name, function (char) {
  return char.toUpperCase();
});
console.log(str_array);

const my_set = new Set();

my_set.add({ name: "anony" });

const set_array = Array.from(my_set);

set_array[0].name = "persona";

for (const value of my_set.values()) {
  console.log(value);
}
