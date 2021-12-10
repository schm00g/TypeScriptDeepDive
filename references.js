var foo = { name: "Shane" };
var bar = foo;
console.log(bar);
var goo = {};
var lar = goo; // bar is a reference
var baz = {}; // baz is a *new object* distinct from `foo`
console.log(goo === lar); // true
console.log(goo === baz); // false
const stringify = JSON.stringify({ willStay: null, willBeGone: undefined });
console.log(stringify);
