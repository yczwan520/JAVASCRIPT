//  Create a function that takes one string as argument and returns a string which
//  has no white space.
const spaceRemove = (str) => {
  const newStr = str.split(" ").join("");
  return newStr;
};
console.log(spaceRemove("Hello world!"));
console.log(spaceRemove("This is JavaScript and HTML"));
console.log(spaceRemove("laminCanada"));

// Create a function that takes one string as argument and returns the letter at
// position 3 from the argument.
const findLetter = (str) => {
  const letter = str.charAt(3);
  return letter;
};
console.log(findLetter("Hello world!"));
console.log(findLetter("This is JavaScript and HTML"));
console.log(findLetter("laminCanada"));

// Create a function that takes one string as argument and capticalize the letter of
// each word in the string and return the whole string.
const upperFirst = (str) => {
  const spiltArr = str.split(" ");
  const newStr = spiltArr
    .map((el) => el[0].toUpperCase() + el.substring(1))
    .join(" ");
  return newStr;
};
console.log(upperFirst("canadian tire"));
console.log(upperFirst("canada post"));

// Given a string, create a function to reverse the case. All lower-cased letters
// should be upper-cased, and vice versa.
const reverseCase = (str) => {
  const spiltArr = str.split("");
  const newStr = spiltArr
    .map((el) =>
      el === el.toLowerCase() ? el.toUpperCase() : el.toLowerCase()
    )
    .join("");
  return newStr;
};
console.log(reverseCase("Happy Birthday"));
console.log(reverseCase("MANY THANKS"));
console.log(reverseCase("sPoNtAnEoUs"));

// Create a function that takes two strings as arguments and returns the number of
// times the first string (the single character) is found in the second string.
const charCount = (letter, str) => {
  const splitArr = str.split("");
  var count = 0;
  const total = (el) => {
    el === letter ? count++ : (count = count + 0);
  };
  splitArr.forEach(total);
  return count;
};
console.log(charCount("a", "edabit"));
console.log(charCount("c", "Chamber of secrets"));
console.log(charCount("b", "big fat bubble"));

// Create a function to return the amount of potatoes there are in a string.
const potatoes = (str) => {
  newStr = str.match(/potato/g);
  const count = newStr.length;
  return count;
};
console.log(potatoes("potato"));
console.log(potatoes("potatopotato"));
console.log(potatoes("potatoapple"));

// Create a recursive function that takes two parameters and repeats the string n
// number of times. The first parameter txt is the string to be repeated and the
// second parameter is the number of times the string is to be repeated.
const repetition = (str, times) => {
  if (times > 0) {
    return str + repetition(str, times - 1);
  } else {
    return "";
  }
};
console.log(repetition("ab", 3));
console.log(repetition("kiwi", 1));
console.log(repetition("cherry", 2));

// Create a function that takes a string and returns a string in which each character
// is repeated once
const doubleChar = (str) => {
  const newStr = str
    .split("")
    .map((el) => el.repeat(2))
    .join("");
  return newStr;
};
console.log(doubleChar("String"));
console.log(doubleChar("Hello World!"));
console.log(doubleChar("1234!_ "));
