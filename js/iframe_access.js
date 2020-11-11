const my_iframe = document.getElementById("my-iframe");

function change_stuff() {
  const iframe_window = my_iframe.contentWindow;
  const iframe_document = my_iframe.contentDocument;
  const ifram_heading = iframe_document.querySelector("h1");

  ifram_heading.textContent = "hello";
  console.log(iframe_document);
  iframe_document.body.style.backgroundColor = "red";
}
