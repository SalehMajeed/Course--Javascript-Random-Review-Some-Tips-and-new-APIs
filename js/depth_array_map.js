const existing_array = ['dcode', 'anony', 'javascript'];
const new_array = existing_array.map(
    function (element, index, array) {
        console.log(array);
        return index + ':' + element + '!' + this.age + '!';
    },
    {
        name: 'persona',
        age: 19,
    }
);

console.log(new_array);
