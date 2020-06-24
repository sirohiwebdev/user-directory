const headers = new Headers();
headers.append("Content-Type", "application/json");
const URL = "http://localhost:5000/api/";

const API = {
  GetUser: async id => {
    const req = await fetch(URL + `users/${id}`, {
      method: "GET",
      headers: headers
    });

    return await req.json();
  },

  GetAllUser: async () => {
    const req = await fetch(URL + `users/`, {
      method: "GET",
      headers: headers
    });

    return await req.json();
  },

  AddUser: async userData => {
    const req = await fetch(URL + `users`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(userData)
    });

    return await req.json();
  },

  UpdateUser: async (id, userData) => {
    const req = await fetch(URL + `users/${id}`, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(userData)
    });

    return await req.json();
  },

  DeleteUser: async id => {
    const req = await fetch(URL + `users/${id}`, {
      method: "DELETE",
      headers: headers
    });

    return await req.json();
  }
};

export default API;
