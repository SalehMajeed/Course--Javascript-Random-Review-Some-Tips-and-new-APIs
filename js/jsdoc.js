/**
 * This function will accept details about a person
 * and create an object for them.
 *
 * @param {string} name The perosn's full name
 * @param {number} age The person's age
 * @param {boolean} is_developer Whether or not a person is developer
 * @returns {Object} The person object
 */

function create_person(name, age, is_developer) {
  return {
    name: name,
    age: age,
    is_developer: is_developer,
  };
}
console.log(create_person("anony", 19, true));

class Person {
  /**
   *
   * @param {string} name The perosn's full name
   * @param {number} age The person's age
   * @param {boolean} is_developer Whether or not a person is developer
   */
  constructor(name, age, is_developer) {
    this.name = name;
    this.age = age;
    this.is_developer = is_developer;
  }
}

/**
 *
 * @param {Person } person
 */

function print_details(person) {
  console.log(person.name, person.age, person.is_developer);
}

/**
 * @returns (number[])
 */

function get_numbers() {
  return [10, 80, 130, 150];
}

const numbers = get_numbers();

for (const n of numbers) {
  console.log(n);
}
