// 1.	Give two arrays and return a new array with the elements in both arrays.
const arr = [];
const targer = [];
const concatNew = (arr, target) => {
  const newArr = arr.concat(target);
  return newArr;
};
console.log(concatNew(["abc", 23, "a10bc", "bcd"], ["bcd", 23, "ddd", "huhu"]));

// 2.	Create a function that takes an array of non-negative integers and strings and return a new array without the strings.
const filterArr = (arr) => {
  return arr.filter((el) => el >= 0 && typeof el === "number");
};
console.log(filterArr([1, 2, "a", "b"]));
console.log(filterArr([1, "a", "b", 0, 15]));
console.log(filterArr([1, 2, "aasf", "1", "123", 123]));

// 3.	Create a function that receives an array as argument and returns a new array which has no duplicate elements.
const transformArr = (arr) => {
  const newArr = arr.filter((value, i, arr) => arr.indexOf(value) === i);
  return newArr;
};
console.log(transformArr([1, 2, 2, 3, 3]));
console.log(transformArr(["hello", "world", "JavaScript", "world"]));

// 4.	Create a function that returns the frequency distribution of an array. This function should return an object, where the keys are the unique elements and the values are the frequency in which those elements occur.const arr=[];
const checkOccur = (arr) => {
  return arr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
};
console.log(checkOccur(["A", "B", "A", "A", "A"]));

// 5.	Given an array and chunk size "n", Create a function such that it divides the array into many subarrays where each subarray is of length size "n".;
newArr = [];
const chunck = (arr, cut) => {
  for (i = 0; i < arr.length; i += cut) {
    newArr.push(arr.slice(i, i + cut));
  }
  return newArr;
};
console.log(chunck([1, 2, 3, 4], 2));
console.log(chunck([1, 2, 3, 4, 5, 6, 7], 3));
console.log(chunck([1, 2, 3, 4, 5], 10));

// 6.Create a function that receives an array contains a series of number as elements and returns the biggest number
const getMax = (arr) => {
  Max = arr.reduce((a, b) => (a > b ? a : b));
  return Max;
};
console.log(getMax([1, 2, 3, 4, 5]));
console.log(getMax([2, 4, 6, 3, 8, 1]));

// 7.Create a function that returns true if the first array can be nested inside the second and false otherwise.
const compare = (arr1, arr2) => {
  newArr1 = arr1.sort(function (a, b) {
    return a - b;
  });
  newArr2 = arr2.sort(function (a, b) {
    return a - b;
  });
  return newArr1[0] > newArr2[0] &&
    newArr1[newArr1.length - 1] < newArr2[newArr2.length - 1]
    ? true
    : false;
};
console.log(compare([1, 2, 3, 4], [0, 6]));
console.log(compare([3, 1], [4, 0]));
console.log(compare([9, 9, 8], [8, 9]));
console.log(compare([1, 2, 3, 4], [2, 3]));

// 8.Create a function that returns an array of strings sorted by length in ascending order.
const sortByLength = (arr) => {
  return (newArr = arr.sort(function (a, b) {
    return a.length - b.length;
  }));
};
console.log(sortByLength(["a", "ccc", "dddd", "bb"]));
console.log(sortByLength(["apple", "pie", "shortcake"]));
console.log(sortByLength(["may", "april", "september", "august"]));
console.log(sortByLength([]));
