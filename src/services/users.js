const usersApiUrl = "https://retrogameparty-fb.firebaseio.com/";

export const getUsers = () =>
  fetch(usersApiUrl + "/users.json")
    .then(response => response.json())
    .then(users =>
      Object.entries(users || {}).map(([id, value]) => ({
        id,
        ...value
      }))
    );

export const addUser = (name, surname, point) =>
  fetch(usersApiUrl + "/users.json", {
    method: "POST",
    body: JSON.stringify({
      name,
      surname,
      point:parseInt(point),
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });

export const deleteUser = userId =>
  fetch(usersApiUrl + "/users/" + userId + ".json", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  });
  
  export const addPoint = (userId, point)=>
  fetch(usersApiUrl + "/users/" + userId + ".json", {
    method: "PATCH",
    body: JSON.stringify({
      point
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });

  export const deletePoint = (userId, point)=>
  fetch(usersApiUrl + "/users/" + userId + ".json", {
    method: "PATCH",
    body: JSON.stringify({
      point
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });