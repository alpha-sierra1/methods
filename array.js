// 1
// Array.prototype.concat();

const arr1 = ["a", "b", "c"];
const arr2 = [1, 2, 3, 4];
const arr4 = ["h", "i", "j", "k"];
const arr3 = arr1.concat(arr2, arr4);
console.log(arr3);

// 3

// Array.prototype.every();
const isPositiveEven = (value) => value % 2 === 0;
const array = [1, 4, 6, 3];
console.log(isPositiveEven(array));

// 4
// Array.prototype.filter();
const array1 = [2, 3, 5, 6, 7, 10, 14, 17];
const result = array1.filter((num) => num % 2 === 0);
console.log(result);

// Array.prototype.find();

const array8 = [10, 20, 30, 40, 50];
const findMethod = array8.find((x) => x > 25);
console.log(findMethod);

const array9 = ["apple", "banana", "orange", "grape"];
const findMethod1 = array9.find((x) => x === "o");
console.log(findMethod1);

// Array.prototype.findIndex();
// Array.prototype.includes();
// Array.prototype.indexOf();

// Array.isArray();
// example
console.log(Array.isArray(["blog", "blah"]));

// Array.prototype.join();
// example
function joinMethod(arr) {
  return arr.join();
}
const array11 = ["this", "an", "array"];
console.log(joinMethod(array11));

// Array.prototype.map();
// example
function multiplier(arr) {
  const multiplier1 = arr.map((x) => x * 2);
  return multiplier1;
}
const numbers = [2, 4, 5, 6, 10];
console.log(multiplier(numbers));

// Array.prototype.reduce();
function productofNumbers(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator * currentValue);
}
const array2 = [3, 4, 5, 3];
const result1 = productofNumbers(array2);
console.log(result1);

// Array.prototype.reduceRight();

// Array.prototype.reverse();
const array3 = ["this", "is", "a", "wanna", "be", "array"];
const reversedArray = array3.reverse();
console.log(reversedArray);

const array4 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const reversedArray1 = array4.reverse();
console.log(reversedArray1);

// Array.prototype.shift(); (removes the first element of the array and returns removed element)

const practiceArray = ["hello", "this", "is", "aditi"];
const shiftArray = practiceArray.shift();
console.log(shiftArray);
console.log(practiceArray); // modifies the original array

// Array.prototype.pop();  (removes the last element from the element and returns the removed element)

function popMethod(arr) {
  const popeye = arr.pop();
  return popeye;
}
const popeyeArray = ["blah", "bleh", "dang"];
const callingPopeye = popMethod(popeyeArray);
console.log(callingPopeye);
console.log(popeyeArray); // modifies the original array

// Array.prototype.slice();
const array5 = [1, 2, 3, 4, 5];
const slicedArray = array5.slice(0, 3);
console.log(slicedArray);
console.log(array5); // doesn't modify the original array

const array6 = ["apple", "banana", "orange", "grape"];
const slicedArray1 = array6.slice(1, 4); // keep in mind it doesnt consider the last index
console.log(slicedArray1);

const array7 = [10, 20, 30, 40, 50];
const slicedArray3 = array7.slice(3, 5);

console.log(slicedArray3);

// Array.prototype.some(); If you need to find if any element satisfies the provided testing function, use some().

// Array.prototype.sort();
// Array.prototype.splice();
// Array.prototype.toString();
// Array.prototype.unshift();
// Array.prototype.values();
