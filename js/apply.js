function sum() {
    console.log(this);
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(sum.apply({ name: 'anony', age: 19 }, [5, 10, 3, 53]));
