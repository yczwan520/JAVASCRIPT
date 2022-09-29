// 1.	Given three arguments ⁠— an object obj of the stolen items, the pets name and a value ⁠— return an object with that name and value in it (as key-value pairs).
const addName = (obj, key, value) => {
  obj[key] = value;
  return obj;
};
console.log(addName({}, "Brutus", 300));
console.log(addName({ piano: 500 }, "Brutus", 400));
console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440));

// 2.	Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.
const keysAndValues = (oldObj) => {
  const newObj = Object.keys(oldObj)
    .sort()
    .reduce((newObj, key) => {
      newObj[key] = oldObj[key];
      return newObj;
    }, {});
  return (arr = [Object.keys(newObj), Object.values(newObj)]);
};

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));

// 3.	Create a function that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.
const freeShipping = (obj) => {
  return (
    Object.values(obj).reduce((sum, price) => {
      return sum + price;
    }, 0) >= 50
  );
};
console.log(freeShipping({ Shampoo: 5.99, "Rubber Ducks": 15.99 }));
console.log(freeShipping({ "Flatscreen TV": 399.99 }));
console.log(
  freeShipping({ Monopoly: 11.99, "Secret Hitler": 35.99, Bananagrams: 13.99 })
);

// 4.	Write a function that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively.
const mapping = (arr) => {
  //use map function fromEntries to convert key-value pairs into an object
  return Object.fromEntries(
    arr.map((el) => [el.toLowerCase(), el.toUpperCase()])
  );
};
console.log(mapping(["p", "s"]));
console.log(mapping(["a", "b", "c"]));
console.log(mapping(["a", "v", "y", "z"]));

// 5.	Given an object of people and their ages, return how old the people would be after n years have passed. Use the absolute value of n.
const afterNYears = (obj, years) => {
  return (newObj = Object.keys(obj).reduce((newObj, key) => {
    newObj[key] = obj[key] + Math.abs(years);
    return newObj;
  }, {}));
};
console.log(
  afterNYears(
    {
      Joel: 32,
      Fred: 44,
      Reginald: 65,
      Susan: 33,
      Julian: 13,
    },
    1
  )
);
console.log(
  afterNYears(
    {
      Baby: 2,
      Child: 8,
      Teenager: 15,
      Adult: 25,
      Elderly: 71,
    },
    19
  )
);

// 6.	Given an Object contains all soccer players name and the time they played. Write two functions to implement the below questions:

// Question1: To calculate the average played time of all players.
// Question2: To find out the players who’s time is over the average time and returns an object with the same format as the players object
// Question1
const onAverage = (players) => {
  const arrValue = Object.values(players);
  return (aveTime =
    arrValue.reduce((sumTime, item) => (sumTime += item.time), 0) /
    arrValue.length);
};
//Question2
const aboveAvgPlayer = (obj, ave) => {
  const arrObj = Object.entries(obj);
  return Object.fromEntries((newArr = arrObj.filter((el) => el[1].time > ave)));
};

console.log(
  onAverage({
    harry: {
      time: 102,
    },
    heungmin: {
      time: 115,
    },
    dele: {
      time: 51,
    },
    christian: {
      time: 57,
    },
    hugo: {
      time: 98,
    },
  })
);

console.log(
  aboveAvgPlayer(
    {
      harry: {
        time: 102,
      },
      heungmin: {
        time: 115,
      },
      dele: {
        time: 51,
      },
      christian: {
        time: 57,
      },
      hugo: {
        time: 98,
      },
    },
    84.6
  )
);

//Question 7 7.	Create a function that takes a string of name and checks how much good is the given name. A preloaded dictionary of alphabet scores is available in the Code tab. Add up the letters of your name to get the total score.
const scores = {
  A: 100,
  B: 14,
  C: 9,
  D: 28,
  E: 145,
  F: 12,
  G: 3,
  H: 10,
  I: 200,
  J: 100,
  K: 114,
  L: 100,
  M: 25,
  N: 450,
  O: 80,
  P: 2,
  Q: 12,
  R: 400,
  S: 113,
  T: 405,
  U: 11,
  V: 10,
  W: 10,
  X: 3,
  Y: 210,
  Z: 23,
};

nameScore = (nameStr) => {
  const score = nameStr
    .split("")
    .reduce((score, letter) => (score += scores[letter]), 0);
  return score <= 60
    ? "NOT TOO GOOD"
    : score >= 61 && score <= 300
    ? "PRETTY GOOD"
    : score <= 301 && score <= 599
    ? "VERY GOOD"
    : "THE BEST";
};
console.log(nameScore("MUBASHIR"));
console.log(nameScore("YOU"));
console.log(nameScore("MATT"));
console.log(nameScore("PUBG"));
