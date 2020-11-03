const my_set = new Set();

my_set.add(60);
my_set.add(my_set.add(50));

console.log(my_set.has(60)); // true
console.log(my_set.size); // 3
console.log(my_set); // console recursion of my_set

my_set.delete(my_set.add(my_set.add(50))); // {60, 50}
my_set.delete(my_set.add(50)); // {60, 50}
