const person = {
  name: "someone",
  age: 20,
};

function drink_alcohol(p) {
  if (p.age < 21) {
    throw new Error("Person is under the age of 21.");
  } else {
    console.log(p.name + " is drinking.");
  }
}

drink_alcohol(person);
