<template>
  <form @submit.prevent="submitSignUp">
    <label>Username</label>
    <input />
    <button type="submit">Submit</button>
  </form>
</template>

<script>
  export default {
    methods: {
      submitSignUp() {
        console.log("submitbutton");
        let baseUrl = 'http://localhost:3000/user/signin';
        fetch(baseUrl, 
            {
             method: "POST",
             mode: "cors",
             body: JSON.stringify({
                 username: 'bobo',
                 email: 'bobo@bobomail.com',
                 password: 'password',
               }),
             headers: {
               "Content-Type": "application/json",
               },
             }
             ).catch(error => {
                 console.error('Panic at the disco:', error);
                   });
      },
    }
  }
</script>
