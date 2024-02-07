<template>
  <form @submit.prevent="submitSignIn">
    <label :for="username-field">Username</label>
    <input id="username-field" v-model.lazy.trim="username"/>
    <label :for="email-field">Email</label>
    <input id="email-field" v-model.lazy.trim="email"/>
    <label :for="password-field">Password</label>
    <input id="password-field" type="password" v-model.lazy.trim="password"/>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
  import { userSignIn } from "../scripts/BackendComms"
  export default {
    data() {
      return {
        username: "",
        email: "",
        password: "",
      };
    },
    methods: {
      submitSignIn() {
        //not sure if should verify here or BackEndComms.js
        if (this.username === "" || this.email === "" || this.password === "") {
          console.log("field cannot be empty")
          return;
        }
        userSignIn(this.username, this.email, this.password);
      },
    }
  }
</script>
