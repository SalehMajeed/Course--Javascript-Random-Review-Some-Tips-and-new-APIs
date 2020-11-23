class DigitalClock {
  constructor(element) {
    this.element = element;
  }

  start() {
    this.update();
    setInterval(() => {
      this.update();
    }, 500);
  }

  update() {
    const parts = this.get_time_parts();
    const minute_formatted = parts.minute.toString().padStart(2, "0");
    const time_formatted = `${parts.hour}:${minute_formatted}`;
    const ampm = parts.is_am ? "AM" : "PM";

    this.element.querySelector(".clock-time").textContent = time_formatted;
    this.element.querySelector(".clock-ampm").textContent = ampm;
  }

  get_time_parts() {
    const now = new Date();

    return {
      hour: now.getHours() % 12 || 12,
      minute: now.getMinutes(),
      is_am: now.getHours() < 12,
    };
  }
}

const clock_element = document.querySelector(".clock");
const clock_object = new DigitalClock(clock_element);

clock_object.start();
