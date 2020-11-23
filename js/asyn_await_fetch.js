async function loade_user() {
  return await (await fetch("color.json")).json();
  const response = await fetch("color.json");
  const users = await response.json();
  console.log(users);
}

async function hi() {
  let users = await loade_user();
  console.log(users);
}

hi();
