function get_data(name) {
  return fetch(`${name}.json`).then((response) => {
    return response.json();
  });
}

// get_data("data").then((text) => {
//   console.log(text);
// });

// async function do_something() {
//   return 15;
// }

// do_something().then((value) => {
//   console.log(value);
// });

// Promise.all([get_data("data"), get_data("color")]).then(([data, color]) => {
//   console.log(data, color);
// });

async function user() {
  const data = await get_data("data");
  const color = await get_data("color");

  console.log(data);
  console.log(color);
  console.log("hello");
}

user();
