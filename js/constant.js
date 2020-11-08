const number = 5;
const string = 'str';
const obj = {
    name: 'persona',
    age: 35,
    occupation: 'developer',
};
const array = ['anony', 'persona', 19];

obj.scope = 'not in limit';

function is_name_too_long(name) {
    const MAX_LENGTH = 5;
    if (name.length > MAX_LENGTH) return true;
    else return false;
}

console.log(is_name_too_long('persona'));

for (const name of array) {
    name += '!';
    console.log(name);
} // give error
