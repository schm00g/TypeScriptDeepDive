// Pure functions
let num = 23;
function stringy(val) {
    return val.toString();
}
const str = stringy(num);
console.log(typeof str);
// Immutable data 
const data = Object.freeze([1, 2, 3, 4, 5, 6]);
// Functions as arguments
const addEmoji = (val) => stringy(val) + " 😃";
const emojiData = data.map(addEmoji);
console.log(emojiData);
