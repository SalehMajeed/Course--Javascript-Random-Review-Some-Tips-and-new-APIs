let re = /\w{3}/; // alpha numberic character with limit in object

console.log(re.test("hello")); //true
console.log(re.test("he")); //false

console.log("an hello".search(re)); // 3
console.log("hi my name is anony".search(re)); // 6

console.log(re.exec("hi anony"));

/**
 * Possible matches:
 *  ` Hello, you have 5 task remaining.
 */

let match = /^(\w+), (\w+)\. You have (\d+) tasks? remaining\.$/; // ^ begining and $ used for ending.

console.log(match.exec("Hello, Anony. You have 5 tasks remaining."));
console.log(match.exec("Hello, Persona. You have 4 task remaining."));
console.log("Hello, Anony. You have 5 tasks remaining.".match(match));
