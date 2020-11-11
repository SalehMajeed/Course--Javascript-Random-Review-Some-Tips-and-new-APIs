function promise_ajax(url, parseJson = false) {
  return new Promise((resoleve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
      resoleve(this.responseText);
    };

    xhr.onerror = function () {
      reject(new Error("network error"));
    };

    xhr.open("get", url);
    xhr.send();
  });
}

promise_ajax("rankings.json", true)
  .then((xhr) => console.log(xhr))
  .catch((err) => console.log(err));
