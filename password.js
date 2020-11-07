function generate_password(len) {
    if (len < 4) return;
    let result = [];
    let obj = {
        numbers: [...Array(10).keys()],
        upper_case: generate_chars(65, 90),
        lower_case: generate_chars(97, 122),
        special_char: [
            ...generate_chars(33, 47),
            ...generate_chars(58, 64),
            ...generate_chars(91, 96),
            ...generate_chars(123, 126),
        ],
    };
    let total_char =
        obj.numbers.length +
        obj.upper_case.length +
        obj.lower_case.length +
        obj.special_char.length;
    for (elements in obj) {
        let number_count = Math.floor(
            (len * Math.floor((elements.length * 100) / total_char)) / 100
        );
        result.push(random_pick(elements, number_count));
    }
}

console.log(generate_password(16));

function generate_chars(start, stop) {
    let step = 1;
    return Array.from({ length: (stop - start) / step + 1 }, (_, i) =>
        String.fromCharCode(start + i * step)
    );
}

function random_pick(array, count) {
    let result = [];
    if (array.length < count) {
        throw new RangeError('Out of Bound: Can not get more than array size');
    }
    while (count != 0) {
        let random_index = Math.floor(Math.random() * array.length);
        result.push(array[random_index]);
        array.slice(random_index, 1);
        count--;
    }
    return result;
}
