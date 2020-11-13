const bc = new BroadcastChannel("dcode");

// handle incoming messages
bc.addEventListener("message", (e) => {
  console.log(e.data);
});

// send messages

bc.postMessage("or bhai");
