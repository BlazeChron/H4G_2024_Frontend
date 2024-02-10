<template>
  <div>
    <form @submit.prevent="submitCreateEvent">
      <ul>
        <li>
          <label :for="event-name-field">Event Name</label>
          <input id="event-name-field" v-model.lazy.trim="event_name"/>
        </li>
        <li>
          <label :for="description-field">Description</label>
          <textarea id="description-field" v-model.lazy.trim="description"/>
        </li>
  
        <li>
          <label :for="start-time-field">Start Date</label>
          <input id="start-time-field" type="date" v-model.lazy.trim="start_time"/>
        </li>

        <li>
          <label :for="end-time-field">End Date</label>
          <input id="end-time-field" type="date" v-model.lazy.trim="end_time"/>
        </li>
  
        <button type="submit">Submit</button>
      </ul>
    </form> 
  </div>
</template>

<script>
  import { createEvent } from "../scripts/BackendComms"
  export default {
    name: "DashboardEventForm",
    data() {
      return {
        event_name: "",
        description: "",
        start_time: "",
        end_time: "",
      };
    },
    methods: {
      submitCreateEvent() {
        //not sure if should verify here or BackEndComms.js
        if (this.event_name === "" || this.description === "" || this.start_time === "" || this.end_time === "") {
          console.log("field cannot be empty")
          return;
        }
        createEvent(this.event_name, this.description, this.start_time, this.end_time);
      },
    },
  }
</script>
