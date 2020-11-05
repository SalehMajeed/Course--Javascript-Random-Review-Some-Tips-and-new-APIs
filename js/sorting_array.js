const array = ['anony', 'abstract', 'and'];
array.sort();
console.log(array);

const people = [
    {
        name: 'Persona',
        age: 20,
    },
    {
        name: 'Anony',
        age: 19,
    },
];

people.sort((a, b) => a.age - b.age);
console.log(people);
