<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> | 
    <router-link to="/signup">Sign Up</router-link> | 
    <router-link to="/signin">Sign In</router-link> | 
    <router-link to="/profile">Profile</router-link> | 
    <router-link to="/dashboard">Dashboard</router-link>
  </nav>
  <router-view/>
</template>

<script>
  export default {
    components: {
    },
    data() {
      return {
      };
    },
    methods: {
    },
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #FF0000;
}
</style>
