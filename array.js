// 1
Array.prototype.concat();

const arr1 = ["a", "b", "c"];
const arr2 = [1, 2, 3, 4];
const arr4 = ["h", "i", "j", "k"];
const arr3 = arr1.concat(arr2, arr4);
console.log(arr3);

// 2
Array.prototype.entries();

// 3

Array.prototype.every();

const isPositiveEven = (value) => value % 2 === 0;
const array = [1, 4, 6, 3];
console.log(isPositiveEven(array));

// 4
Array.prototype.filter();

const array1 = [2, 3, 5, 6, 7, 10, 14, 17];
const result = array1.filter((num) => num % 2 === 0);
console.log(result);

Array.prototype.find();
Array.prototype.findIndex();
Array.prototype.includes();
Array.prototype.indexOf();
Array.isArray();
Array.prototype.join();
Array.prototype.map();
Array.prototype.pop();
Array.prototype.push();
Array.prototype.reduce();
Array.prototype.reduceRight();
Array.prototype.reverse();
Array.prototype.shift();
Array.prototype.slice();
Array.prototype.some();
Array.prototype.sort();
Array.prototype.splice();
Array.prototype.toString();
Array.prototype.unshift();
Array.prototype.values();