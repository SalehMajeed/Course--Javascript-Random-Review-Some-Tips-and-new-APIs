class number_model {
    constructor() {
        this.number = 0;
        this.color = 'red';
        this.observers = [];
    }

    increment() {
        const colors = ['orange', 'red', 'green', 'blue'];

        this.number++;
        this.color = colors[Math.floor(Math.random() * colors.length)];

        this.notify_observers();
    }

    add_observer(o) {
        this.observers.push(o);
    }

    notify_observers() {
        for (let o of this.observers) {
            o.update(this);
        }
    }
}

class element_observer {
    constructor(element_id) {
        this.element = document.getElementById(element_id);
    }
    update(model) {
        this.element.innerHTML = model.number;
        this.element.style.backgroundColor = model.color;
    }
}

class console_observers {
    constructor() {}

    update(model) {
        console.log(
            'The number is ' + model.number + ' and the color is ' + model.color
        );
    }
}

class history_observer {
    constructor() {
        this.color_history = [];
    }

    update(model) {
        this.color_history.unshift(model.color[0].toUpperCase());

        let msg = 'The most recent 5 colors were: ';
        for (let i = 0; i < 5; i++) {
            if (this.color_history[i]) {
                msg += this.color_history[i] + '';
            }
        }

        console.log(msg);
    }
}

const model = new number_model();

model.add_observer(new element_observer('element_observer1'));
model.add_observer(new console_observers());
model.add_observer(new history_observer());

model.notify_observers();
