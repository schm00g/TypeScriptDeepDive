var inc = (x: any) => x + 2;
console.log(inc(1));

var double = (y: number) => y * 2;
console.log(double(13));

const arr = ["harry", "mary", "jerry"];
const lines = arr.map(i => (i.slice(0, 2)));
console.log(lines);