//Question 1: Given an object containing the names and ages of a group of people, return the name of the oldest person.
"use strict";
const oldest = (obj) => {
  return (newObj = Object.fromEntries(
    Object.entries(obj).sort(function (a, b) {
      return b[1] - a[1];
    })
  ));
};
console.log(
  oldest({
    Emma: 71,
    Jack: 45,
    Amy: 15,
    Ben: 29,
  })
);

console.log(
  oldest({
    Max: 9,
    Josh: 13,
    Sam: 48,
    Anne: 33,
  })
);

//question2 Given a list of shoes and write a function receives the shoeList as an argument and returns a
// new list which ordered as color(alphabetically). If two shoes has the same color and then
// order as the size.

("use strict");
const shoeList = (arr) => {
  const newArr = arr
    .reduce((newArr, value) => {
      newArr.push(Object.entries(value));
      return newArr;
    }, [])
    .sort();
  for (let i = 0; i < newArr.length; i++) {
    for (let j = i; j < newArr.length; j++) {
      if (newArr[i][0][1] === newArr[j][0][1]) {
        if (newArr[i][1][1] < newArr[j][1][1]) {
          let large = newArr[i];
          newArr[i] = newArr[j];
          newArr[j] = large;
        }
      }
    }
  }
  return newArr;
};
console.log(
  shoeList([
    { color: "white", size: 9 },
    { color: "red", size: 8.5 },
    { color: "yellow", size: 10 },
    { color: "blue", size: 11 },
    { color: "white", size: 9.5 },
  ])
);

// 3. As you complete questions on Edabit, you gain experience points depending on the difficulty
// of the question. The points for each difficulty are as follows:
("use strict");
const getXP = (obj) => {
  arr = Object.values(obj);
  return arr[0] * 5 + arr[1] * 10 + arr[2] * 20 + arr[3] * 40 + arr[4] * 80;
};

console.log(
  getXP({
    "Very Easy": 89,
    Easy: 77,
    Medium: 30,
    Hard: 4,
    "Very Hard": 1,
  })
);

console.log(
  getXP({
    "Very Easy": 254,
    Easy: 32,
    Medium: 65,
    Hard: 51,
    "Very Hard": 34,
  })
);
