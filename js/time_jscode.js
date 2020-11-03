/* Old Way: */
const start = new Date();

alert("How's it going?");

const end = new Date();

console.log(end - start);

// new way
console.time('dcode');

alert("How's it going?");

console.timeEnd('dcode');
