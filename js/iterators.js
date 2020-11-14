// const numbers = [1, 2, 3];
// const numbers_iterator = numbers[Symbol.iterator]();

// for (const n of numbers) {
//   console.log(n);
// }

// console.log(numbers_iterator);
// console.log(numbers_iterator.next());
// console.log(numbers_iterator.next());
// console.log(numbers_iterator.next());
// console.log(numbers_iterator.next());

// function new_iterator(max) {
//   return {
//     [Symbol.iterator]() {
//       let n = 0;

//       return {
//         next() {
//           n++;

//           if (n <= max) {
//             return {
//               value: n,
//               done: false,
//             };
//           }
//           return {
//             value: undefined,
//             done: true,
//           };
//         },
//       };
//     },
//   };
// }

// for (const n of new_iterator(10)) {
//   console.log(n);
// }

class NumberList {
  constructor() {
    this.numbers = [1, 2, 3, 4];
  }
  [Symbol.iterator]() {
    const numbers = this.numbers;
    let current_index = -1;

    return {
      next() {
        return {
          value: numbers[++current_index],
          done: current_index >= numbers.length,
        };
      },
    };
  }
}

const num_list = new NumberList();

for (const n of num_list) {
  console.log(n);
}
