const course = {
    name: 'Web Programing',
    score: 75,
};

const grade = {
    score: 92,
};

const final_result = Object.assign(course, grade, { teacher: 'Mrs Water' });
const copy = Object.assign(final_result);

console.log(copy);
console.log(final_result);

function print_name(options) {
    const defaults = {
        first_name: 'steve',
        last_name: 'Bottle',
    };

    options = Object.assign(defaults, options);

    console.log(`${options.first_name} ${options.last_name}`);
}

print_name({ first_name: 'Anony', last_name: 'Persona' });
