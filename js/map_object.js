let zoo = new Map();

zoo.set('Zebra', 5);
zoo.set('Gorilla', 2);
zoo.set('Monkey', 76);

let zebra_cout = zoo.get('Zebra');
console.log('Zebra = ' + zebra_cout);

for (let [key, value] of zoo) {
    console.log(key + ':' + value);
}
