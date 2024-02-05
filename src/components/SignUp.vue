<template>
  <form @submit.prevent="submitSignIn">
    <label>Username</label>
    <input />
    <button>Submit</button>
  </form>
</template>

<script>
  export default {
    methods: {
      submitSignIn() {
        console.log("submitbutton");
        let baseUrl = 'https://localhost:3000/signup';
         fetch(baseUrl, 
            {
             method: "POST",
             mode: "cors",
             body: {
                 username: 'bobo',
                 email: 'bobo@bobomail.com',
                 password: 'password',
               },
             headers: {
               "Content-Type": "application/json",
               },
             }
             );
      },
    }
  }
</script>
