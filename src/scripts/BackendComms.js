
const baseURL = "http://localhost:3000"

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
  ).catch(error => {
                 console.error(error);
                   });
}
export {userSignUp, userSignIn}
