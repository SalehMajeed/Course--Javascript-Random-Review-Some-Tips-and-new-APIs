const a1 = [10, 20, 30];
const a2 = [5, 6, ...a1, 'anony'];

function sum(a, b, c) {
    return a + b + c;
}

const result = sum.apply(null, a1); // old way

console.log(result); // 60

console.log(sum(...a1)); // 60

console.log(a2); // [5, 6, 10, 20, 30, 'anony']
