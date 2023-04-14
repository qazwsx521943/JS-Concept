const array = [1, 2, 3, 4, 5];
const iterator = array[Symbol.iterator]();
console.log(array);

console.log(iterator.next().value);
