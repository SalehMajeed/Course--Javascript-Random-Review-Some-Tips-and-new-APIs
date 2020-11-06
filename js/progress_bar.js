class ProgressBar {
    constructor(element, initial_value = 0) {
        this.value_element = element.querySelector('.progress-bar-value');
        this.fill_element = element.querySelector('.progress-bar-fill');

        this.set_value(initial_value);
    }

    set_value(new_value) {
        if (new_value < 0) new_value = 0;
        if (new_value > 100) new_value = 100;

        this.value = new_value;
        this.update();
    }

    update() {
        const percentage = this.value + '%';

        this.fill_element.style.width = percentage;
        this.value_element.textContent = percentage;
    }
}

const progress_bar = new ProgressBar(
    document.querySelector('.progress-bar'),
    36
);
