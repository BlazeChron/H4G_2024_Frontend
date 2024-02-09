//import jwt from "jsonwebtoken";
import Cookies from 'js-cookie';
const baseURL = "http://localhost:3000";

const baseRequest = (url, method, body, includeJWT) => {
  
  const storedToken = includeJWT ? Cookies.get('jwtToken') : ""; 

  const request = new Request(baseURL + url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${storedToken}`
    },
    body: JSON.stringify(body),
  }
  );

  return request;
}

const handleResponse = (response) => {
  const responseJSON = response.json();
  return responseJSON;
}


const userSignUp = (username, email, password) => {
  const body = {
    username: username,
    email: email,
    password: password, 
  }

  fetch(baseRequest("/user/signup", "POST", body, false))
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
              console.log(response.token);
        })
        .catch(error => {console.error(error);});

return;
}
export {userSignUp, userSignIn, verifyJWT, userUpdateProfile }
