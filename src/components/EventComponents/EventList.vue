<template>
  <div>
    <form @submit.prevent="submitSearchEvents">
      <label :for="start-field">Start</label>
      <input id="start-field" type="number" v-model.lazy.trim="startID"/>
      <label :for="start-field">End</label>
      <input id="start-field" type="number" v-model.lazy.trim="endID"/>
      <button type="submit">Submit</button>
    </form>

    <ul>
      <li v-for="item in EventItems" :key="item.id">
        <EventListItem :event_name="item.event_name" :description="item.description" :start_time="item.start_time" :end_time="item.end_time"/>
      </li>
    </ul>
  </div>
</template>

<script>
import { queryEvent } from "../../scripts/BackendComms";
import EventListItem from "./EventListItem.vue";
  export default {
    components: {
      EventListItem,
    },
    data() {
      return {
        startID: 1,
        endID: 2,
        EventItems: [],
      };
    },
    methods: {
      async submitSearchEvents() {
        this.EventItems = [];
        for (let i = this.startID; i < this.endID; i++) {
          const res = await queryEvent(i);
          console.log("hi");
          console.log(res);
          if (res != null) {
            const body = {event_name: res.event_name, description: res.description, start_time: res.start_time, end_time: res.end_time };
            this.EventItems.push(body);
            console.log(i);
          } else {
            break;
          }
        }
      },
    }
  }
</script>

<style>
li{
  margin: 10px;
}
</style>
