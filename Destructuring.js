// Object destructuring
var rect = { x: 0, y: 10, width: 15, height: 20 };

// Destructuring assignment
var {x, y, width, height} = rect;
console.log(x, y, width, height); // 0,10,15,20

rect.x = 10;
({x, y, width, height} = rect); // assign to existing variables using outer parentheses
console.log(x, y, width, height); // 10,10,15,20

const person = {firstName: "Gerry", hair: "brown", eyes: "blue", sport: "hurling"};

const { firstName, hair, eyes } = person;

console.log(firstName, hair, eyes);

// ...rest
let {ß, å, ...rest} = {ß: "qwe", å: 123, q: "gold", œ: 10001 };
console.log(ß, å, rest);

// Array destructuring
// smart swap
let a = 12, b = 55;
console.log(`a is: ${a} and b is ${b}`);
[a, b] = [b, a]; // swaps values
console.log(`a is now: ${a} and b is now ${b}`);

let [x1, y1, ...remaining] = [1, 2, 3, 4, 5, 6];
console.log(x1, y1, remaining);

// destructuring with ignores
let [x2, y2, , , ...unignoredRest] = [1, 2, 3, 4, 5, 6];
console.log(x2, y2, unignoredRest);