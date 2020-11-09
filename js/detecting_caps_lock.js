const inp_password = document.getElementById("inp_password");
const caps_lock_warn = document.querySelector(".caps-lock-warn");

inp_password.addEventListener("keyup", function (e) {
  const is_caps_lock_on = e.getModifierState("CapsLock");

  caps_lock_warn.style.display = is_caps_lock_on ? "block" : "none";
});
