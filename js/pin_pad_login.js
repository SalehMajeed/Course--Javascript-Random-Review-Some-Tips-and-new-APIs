class Pin_login {
  constructor({ el, login_end_pont, redirect_to, max_numbers = Infinity }) {
    this.el = {
      main: el,
      num_pad: document.querySelector(".pin-login__numpad"),
      text_display: el.querySelector(".pin-login__text"),
    };
    this.login_end_pont = login_end_pont;
    this.redirect_to = redirect_to;
    this.max_numbers = max_numbers;
    this.value = "";
    this._generate_pad();
  }
  _generate_pad() {
    const pad_layout = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "backspace",
      "0",
      "done",
    ];

    pad_layout.forEach((key) => {
      const insert_break = key.search(/[369]/) !== -1;
      const key_el = document.createElement("div");

      key_el.classList.add("pin-login__key");
      key_el.classList.toggle("material-icons", isNaN(key));
      key_el.textContent = key;
      key_el.addEventListener("click", () => {
        this._handle_key_press(key);
      });
      this.el.num_pad.appendChild(key_el);

      if (insert_break) {
        this.el.num_pad.appendChild(document.createElement("br"));
      }
    });
  }
  _handle_key_press(key) {
    switch (key) {
      case "backspace":
        this.value = this.value.substring(0, this.value.length - 1);
        break;

      case "done":
        this._attempt_login();
        break;

      default:
        if (this.value.length < this.max_numbers && !isNaN(key)) {
          this.value += key;
        }
        break;
    }

    this._update_value_text();
  }

  _update_value_text() {
    this.el.text_display.value = "_".repeat(this.value.length);
    this.el.text_display.classList.r emove("pin-login__text--erro");
  }

  _attempt_login() {
    if (this.value.length > 0) {
      fetch(this.login_end_pont, {
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `pincode=${this.value}`,
      }).then((response) => {
        if (response.status == 200) {
          window.location.href = this.redirect_to;
        } else {
          this.el.text_display.classList.add("pin-login__text-error");
        }
      });
    }
  }
}

new Pin_login({
  el: document.getElementById("mainPinLogin"),
  login_end_pont:
    "http://localhost/Javascript%20Random,%20Review%20+%20Some%20Tips%20and%20new%20APIs/login.php",
  redirect_to: "dashboard.html",
  max_numbers: 4,
});
