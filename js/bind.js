let c1 = {
    x: 5,
    y: 10,
};

let c2 = {
    x: 75,
    y: 235,
};

function print_coordinates() {
    console.log(this.x, this.y);
}

print_coordinates.bind(c1)();
print_coordinates.bind(c2)();
