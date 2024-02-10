<template>
  <form @submit.prevent="submitSignUp">
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
  import { userSignUp } from "../scripts/BackendComms"
  export default {
    data() {
      return {
        username: "",
        email: "",
        password: "",
      };
    },
    methods: {
      submitSignUp() {
        //not sure if should verify here or BackEndComms.js
        if (this.username === "" || this.email === "" || this.password === "") {
          window.alert("field cannot be empty");
          return;
        }
        userSignUp(this.username, this.email, this.password);
      },
    }
  }
</script>
