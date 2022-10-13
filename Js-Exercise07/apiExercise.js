//POST
const newEvent3 = {
  date: "2022-11-29T11:32:40",
  category: "food",
  description: "this is a new event created by Sofia",
  city: "Toronto, CA",
  venue: "890 Bloor St W, Toronto, ON, Canada",
  title: "Let’s go to eat",
};

const newEvent4 = {
  date: "2022-06-29T11:32:40",
  category: "food",
  description: "this is a new event created by James",
  city: "Toronto, CA",
  venue: "8910 Bloor St W, Toronto, ON, Canada",
  title: "Let’s go to eat",
};

const addEvent = (newEvent) => {
  fetch("https://601caf791a9c220017060c02.mockapi.io/api/v1/Events/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newEvent),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

addEvent(newEvent3);
addEvent(newEvent4);

//DELETE
const deleteEvent = (eventId) => {
  fetch(
    `https://601caf791a9c220017060c02.mockapi.io/api/v1/Events/${eventId}`,
    {
      method: "DELETE",
    }
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};
deleteEvent(19);
deleteEvent(20);

//PUT -1
const updateObj = {
  city: "Scarborough",
};
const updateEvent = (id, updateObj) => {
  fetch(`https://601caf791a9c220017060c02.mockapi.io/api/v1/Events/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateObj),
  })
    .then((response) => response.json())
    .then((data) => console.log(data)) //return the updated data
    .catch((err) => console.log(err));
};
updateEvent(24, updateObj);

//PUT-2
const updateObj = {
  title: "This is the title 10",
};
const updateEvent = (id, updateObj) => {
  fetch(`https://601caf791a9c220017060c02.mockapi.io/api/v1/Events/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateObj),
  })
    .then((response) => response.json())
    .then((data) => console.log(data)) //return the updated data
    .catch((err) => console.log(err));
};
updateEvent(10, updateObj);

//GET-1
const getApi = (category) => {
  fetch(
    `https://601caf791a9c220017060c02.mockapi.io/api/v1/Events/?category=${category}`
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};
getApi("travel");

//GET-2
const getApi = (category, date) => {
  fetch(
    `https://601caf791a9c220017060c02.mockapi.io/api/v1/Events/?category=${category}&date=${date}`
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};
getApi("travel", "2020-03-27");
