// for
for (let i = 0; i < 9; i++) {
  if (i == 3) continue;

  if (i == 7) break;
  console.log(i);
}

// while
{
  let i = 0;

  while (i < 10) {
    console.log(i);

    i++;
  }
}

// do while
{
  let i = 10;

  do {
    console.log(i);
    i--;
  } while (i < 10 && i > 0);
}

// for in
{
  const person = {
    name: "anony",
    age: 19,
    occupation: "developer",
  };

  for (const prop in person) {
    console.log(person[prop]);
  }
}

// for of
{
  const numbers = [5, 8, 1];
  for (const n of numbers) {
    console.log(n);
  }
}

// for each
{
  const numbers = [5, 10, 13];

  numbers.forEach((n, i) => {
    console.log(n, i);
  });
}
