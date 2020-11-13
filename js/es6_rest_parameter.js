function add(...[a, b, ...nums]) {
  let total = 0;

  console.log(a, b);

  for (const n of nums) {
    total += n;
  }
  return total;
}

const result = add(5, 10, 20);

console.log(result);
