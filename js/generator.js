// function* generator_example() {
//   yield 8;
//   yield 9;
//   yield 10;
//   yield 11;
//   yield 12;
//   return 13;
// }

// const generator = generator_example();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// console.log(generator);

// function* generator_example(max) {
//   let n = 0;

//   while (n < max) {
//     n++;
//     yield n * n;
//   }
// }

// for (const n of generator_example(10)) {
//   console.log(n);
// }

function* create_unique_random_generator(array) {
  const available = array;

  while (available.length !== 0) {
    const random_index = Math.floor(Math.random() * available.length);
    const value = available[random_index];

    available.splice(random_index, 1);

    yield value;
  }
}

const names = ["anony", "persona", "grey", "black", "white"];
const uniqueNames = create_unique_random_generator(names);

for (const name of uniqueNames) {
  console.log(name);
}
