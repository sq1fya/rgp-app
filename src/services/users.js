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
      point
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
  
  export const addPoint = (point, name, surname)=>
  fetch(usersApiUrl + "/users/" + point + ".json", {
    method: "PUT",
    body: JSON.stringify({
      point: 9,
      name: name,
      surname: surname
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });