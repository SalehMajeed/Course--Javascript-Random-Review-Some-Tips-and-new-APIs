function get_data() {
  return new Promise((resolve, reject) => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((err) => console.log(err));
  });
}

function get_ranking() {
  return new Promise((resolve, reject) => {
    fetch("rankings.json")
      .then((response) => response.json())
      .then((data) => resolve(data));
  });
}

get_data()
  .then((data) => {
    console.log(data);
    return get_ranking();
  })
  .then((text) => console.log(text));
// fetch("data.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     return fetch("rankings.json");
//   })
//   .then((response) => {
//     return response.text();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log(err);
//   });
