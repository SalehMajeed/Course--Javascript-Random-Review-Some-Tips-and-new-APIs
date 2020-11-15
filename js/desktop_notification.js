function show_notification() {
  const notification = new Notification("New Message from us", {
    body: "hey mate, how are you? You want to catch up soon",
    icon: "",
  });
  notification.onclick = (e) => {
    window.location.href = "https://google.com";
  };
}

console.log(Notification.permission); // default

if (Notification.permission == "granted") {
  show_notification();
  alert("We have permission");
} else if (Notification.permission != "denied") {
  Notification.requestPermission().then((permission) => {
    show_notification();
    if (permission == "granted") console.log(permission);
  });
}
