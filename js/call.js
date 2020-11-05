function print_name(first, last) {
    console.log(first, last);
    console.log(this);
}

print_name.call(
    { model: 'Samsung galaxy', color: 'black' },
    'anony',
    'persona'
);
