const width = 3;
const height = 3;

outer_loop: for (let x = 1; x <= width; x++) {
    for (let y = 1; y <= height; y++) {
        if (x == 2 && y == 2) {
            break outer_loop;
        }
        console.log(`${x},${y}`);
    }
}
