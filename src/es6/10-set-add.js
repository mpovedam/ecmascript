const list = new Set();

list.add('item 1');
list.add('item 2').add('item 3');

console.log(list);



const array = [1, 1, 2, 2, 3, 4, 4, 5]
const newArray = new Set(array);

const sinRepetidos = [ ... newArray]
console.log(sinRepetidos) // [ 1, 2, 3, 4, 5 ]

console.log(typeof sinRepetidos);


const array = [1, 1, 2, 2, 3, 4, 4, 5]
// 1. Convertir de Array a Set
const set = new Set(array) // Set(5) {1, 2, 3, 4, 5}
// 2. Convertir de Set a Array
const arraySinRep = Array.from(set) // [1, 2, 3, 4, 5]
// 3. Propagar los elementos del Array dentro de otro Array
const sinRepetidos = [ ...arraySinRep] // [1, 2, 3, 4, 5]
console.log(sinRepetidos);
console.log(typeof sinRepetidos);