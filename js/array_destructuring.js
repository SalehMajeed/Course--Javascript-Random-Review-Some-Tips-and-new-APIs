let person = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function print_details([one, two, ...rest]) {
    console.log(one);
    console.log(two);
    console.log(rest);
}

print_details(person);
