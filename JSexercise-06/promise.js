//question 1
const testNum = (num) => {
  console.log(typeof num);
  let compareToTen = new Promise(function (resolve, reject) {
    resolve(
      typeof num !== "number"
        ? "please enter a number"
        : num > 10
        ? "number great than 10"
        : num === 10
        ? "number equal 10"
        : "number less than 10"
    );
  });
  compareToTen
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
};
testNum(15);
testNum(8);

//question 2-1
async function fetchData() {
  try {
    const res = await fetch(
      "https://601caf791a9c220017060c02.mockapi.io/api/v1/Events/"
    );
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
fetchData();

// const fetchData = () => {
//   const res = fetch(
//     "https://601caf791a9c220017060c02.mockapi.io/api/v1/Events/"
//   )
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// };
// fetchData();

//question 2-2
async function fetchHost() {
  try {
    const res = await fetch(
      "https://601caf791a9c220017060c02.mockapi.io/api/v1/Hosts/"
    );
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
fetchHost();

// const fetchHost = () => {
//   const res = fetch("https://601caf791a9c220017060c02.mockapi.io/api/v1/Hosts/")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// };
// fetchHost();

//question 2-3
async function fetchData(eventId) {
  try {
    const res = await fetch(
      `https://601caf791a9c220017060c02.mockapi.io/api/v1/Events/${eventId}`
    );
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
fetchData(1);

// const fetchData = (eventId) => {
//   const res = fetch(
//     `https://601caf791a9c220017060c02.mockapi.io/api/v1/Events/${eventId}`
//   )
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// };
// fetchData(1);

//question 2-4
async function fetchHost(id) {
  try {
    const res = await fetch(
      `https://601caf791a9c220017060c02.mockapi.io/api/v1/Hosts/${id}`
    );
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
fetchHost(1);

// const fetchHost = (id) => {
//   const res = fetch(
//     `https://601caf791a9c220017060c02.mockapi.io/api/v1/Hosts/${id}`
//   )
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// };
// fetchHost(1);
