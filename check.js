const list = [
    {
        id: 'foo',
        display: 'Foo Select'
    },
    {
        id: 'bar',
        display: 'Bar Select'
    },
];
const fooIndex = list.map(i => i.id).indexOf('foo');
console.log(fooIndex); // 0
// The map() method creates a new array populated with the results of
// calling a provided function on every element in the calling array.
const lenghtsDisplay = list.map(i => i.display.length);
console.log(lenghtsDisplay);
