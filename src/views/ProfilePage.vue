<template>
  <div class="grid-container">
    <form @submit.prevent="submitUpdateRequest">
      <ul>
        <li>
          <label :for="username-field">Username</label>
          <input id="username-field" v-model.lazy.trim="username"/>
        </li>
  
        <li>
        <label :for="email-field">Email</label>
        <input id="email-field" v-model.lazy.trim="email"/>
        </li>
  
        <li>
        <label :for="password-field">Password</label>
        <input id="password-field" type="password" v-model.lazy.trim="password"/>
        </li>
  
        <li>
        <label :for="account-type">Account Type</label>
        <select id="account-type">
          <option>Volunteer</option>
          <option>NPO</option>
        </select>
        </li>
  
        <li>
        <label :for="name-field">Name</label>
        <input id="name-field" v-model.lazy.trim="name"/>
        </li>
        
        <li>
        <label :for="phone-field">Phone</label>
        <input id="phone-field" v-model.lazy.trim="phone"/>
        </li>
  
        <li>
        <label :for="description-field">Description</label>
        <textarea id="description-field" v-model.lazy.trim="description"/>
        </li>
  
        <li>
        <button type="submit">Submit</button>
        </li>
      </ul>
    </form>
  </div>
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
      submitUpdateRequest(){
      },
    }
  }
</script>
