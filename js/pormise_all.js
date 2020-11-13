const fetch_users = fetch("user.json");
const fetch_colors = fetch("color.json");

Promise.all([fetch_users, fetch_colors])
  .then((values) => {
    return Promise.all(values.map((r) => r.json()));
  })
  .then(([users, color]) => {
    console.log(users);
    console.log(color);
  })
  .catch((err) => console.log(err));
