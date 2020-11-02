const direction = {
    UP: 'UP',
    DOWN: 'DOWN',
    LEFT: 'LEFT',
    RIGHT: 'RIGHT',
};

function say_direction(directions) {
    switch (directions) {
        case direction.UP:
            console.log('We are going up!');
            break;
        case direction.DOWN:
            console.log('We are going down!');
            break;
        case direction.LEFT:
            console.log('We are going left!');
            break;
        case direction.RIGHT:
            console.log('We are going right!');
            break;
    }
}

say_direction(direction.UP);
say_direction('DOWN');
