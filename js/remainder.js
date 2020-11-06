function get_color(name) {
    const colors = ['green', 'red', 'blue'];
    const index = name.length % colors.length;

    return colors[index];
}

console.log(get_color('Anony'));
