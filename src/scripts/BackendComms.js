//import jwt from "jsonwebtoken";
import Cookies from 'js-cookie';
const baseURL = "http://localhost:3000";

const userSignUp = (username, email, password) => {
  fetch(baseURL + "/user/signup",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          username: username,
          email: email,
          password: password, 
      }),
    }
  ).catch(error => {
                 console.error(error);
                   });
}

const userSignIn = (username, email, password) => {
  console.log("signin");
  fetch(baseURL + "/user/signin",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          username: username,
          email: email,
          password: password, 
      }),
    }
  )
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((response) => {
    console.log(response.token);
    Cookies.set('jwtToken', response.token, { expires: 1 }); // Set the cookie to expire in 1 day 
  })
  .catch(error => {
                 console.error(error);
                   });
}

const verifyJWT = () => {
  console.log("signincheck");
  const storedToken = Cookies.get('jwtToken');
  fetch(baseURL + "/user/signincheck",
    {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${storedToken}`
      },
    }
  )
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((response) => {
    console.log(response.token);
  })
  .catch(error => {
                 console.error(error);
                   });

return;
}
export {userSignUp, userSignIn, verifyJWT}
