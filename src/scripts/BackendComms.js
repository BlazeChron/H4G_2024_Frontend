//import jwt from "jsonwebtoken";
import Cookies from 'js-cookie';
const baseURL = "http://localhost:3000";

const baseRequest = (url, method, body, includeJWT) => {
  
  const storedToken = includeJWT ? Cookies.get('jwtToken') : ""; 

  const requestBody = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${storedToken}`
    },
  };
  if (body != null) {
    requestBody.body = JSON.stringify(body);
  }

  const request = new Request(baseURL + url, requestBody);
  return request;
}

const handleResponse = (response) => {
  const responseJSON = response.json();
  return responseJSON;
}

//authentication
const isNPO = () => {
  const role = Cookies.get("role");
  return role === "NPO";
}

const userSignUp = (username, email, password) => {
  const body = {
    username: username,
    email: email,
    password: password, 
  }

  fetch(baseRequest("/user/signup", "POST", body, false))
        .then(window.alert("Successful signup"))
        .catch(error => {console.error(error);});
}

const userSignIn = (username, email, password) => {
  const body = {
    username: username,
    email: email,
    password: password, 
  }

  fetch(baseRequest("/user/signin", "POST", body, false))
        .then((response) => {
              if (response.ok) {
                //return response.json();
                return handleResponse(response);
              }
        })
        .then((response) => {
              console.log(response.token);
              Cookies.set('jwtToken', response.token, { expires: 1 }); // Set the cookie to expire in 1 day 
              verifyJWT();
              if (Cookies.get("name") === "null") {
                window.alert("Logged in. Please update your name");
              } else {
                window.alert("Logged in as " + Cookies.get("name"));
              }
        })
        .catch(error => {console.error(error);});
}

const userUpdateProfile = (username, email, password, accountType, name, phone, description) => {
  const body = {
    username: username,
    email: email,
    password: password,
    accountType: accountType,
    name: name,
    phone: phone,
    description: description,
  }

  fetch(baseRequest("/user/update", "PUT", body, true))
        .then((response) => {
              if (response.ok) {
                return handleResponse(response);
              }
        })
        .catch(error => {console.error(error);});
}

const verifyJWT = () => {
  fetch(baseRequest("/user/signincheck", "POST", {}, true))
        .then((response) => {
              if (response.ok) {
                return response.json();
              }
        })
        .then((response) => {
              Cookies.set('role', response.message.role, { expires: 1 });     //setting role as cookie when verifying jwt 
              Cookies.set('name', response.message.name, { expires: 1 });     //setting role as cookie when verifying jwt 
        })
        .catch(error => {console.error(error);});

return;
}


//event related queries
const createEvent = (event_name, description, start_time, end_time) => {
  const body = {
    event_name: event_name,
    description: description,
    start_time: start_time,
    end_time: end_time,
  }

  fetch(baseRequest("/event/create", "POST", body, true))
        .then((response) => {
              if (response.ok) {
                return handleResponse(response);
              }
        })
        .catch(error => {console.error(error);});
}

const queryEvent = (id) => {
  return fetch(baseRequest(`/event/${id}`, "GET", null, false))
        .then((response) => {
              if (response.ok) {
                return response.json();
              }
        })
        .then((response) => {
          return response.data;
        })
        .catch(error => {console.error(error);});
}

export { isNPO, userSignUp, userSignIn, verifyJWT, userUpdateProfile, createEvent, queryEvent }
