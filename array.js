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
// example
console.log(Array.isArray(["blog", "blah"]));

Array.prototype.join();
// example
function joinMethod(arr) {
  return arr.join();
}
const array11 = ["this", "an", "array"];
console.log(joinMethod(array11));

Array.prototype.map();
// example
function multiplier(arr) {
  const multiplier1 = arr.map((x) => x * 2);
  return multiplier1;
}
const numbers = [2, 4, 5, 6, 10];
console.log(multiplier(numbers));

Array.prototype.pop();
// example
function popMethod(arr) {
  const popeye = arr.pop();
  return popeye;
}
const popeyeArray = ["blah", "bleh", "dang"];
const callingPopeye = popMethod(popeyeArray);
console.log(callingPopeye);

Array.prototype.reduce();
function productofNumbers(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator * currentValue);
}
const array2 = [3, 4, 5, 3];
const result1 = productofNumbers(array2);
console.log(result1);

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
